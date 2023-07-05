import {PubSub} from 'pubsub-js';
import crc from "crc";

const {Buffer} = require('buffer');

let hiloWebsocket, hiloLockReconnect = false;
let createHiloWebSocket = (url) => {
    hiloWebsocket = new WebSocket(url);
    hiloWebsocket.onopen = function () {
        hiloHeartCheck.reset().start();
    }
    hiloWebsocket.onerror = function () {
        hiloReconnect(url);
    };
    hiloWebsocket.onclose = function (e) {
        console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
        hiloReconnect(url);
    }
    hiloWebsocket.onmessage = function (event) {
        // lockReconnect = true;
        //event 为服务端传输的消息，在这里可以处理
        PubSub.publish('message', event.data);
    }
}
let hiloReconnect = (url) => {
    if (hiloLockReconnect) return;
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(function () {
        createHiloWebSocket(url);
        hiloLockReconnect = false;
    }, 4000);
}
let serialNum = 1n
let hiloHeartCheck = {
    msgId: 1n,
    timeout: 6000, //6秒
    timeoutObj: null,
    reset: function () {
        clearInterval(this.timeoutObj);
        return this;
    },
    start: function () {
        this.timeoutObj = setInterval(function () {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            // hiloWebsocket.send("ping");
            hiloWebsocket.send(encodeMessage(3, serialNum, "hello world wss user proxy"));
            serialNum++
            console.log("msgId:", serialNum)
        }, this.timeout)
    }
}

function stringToUint8Array(str) {
    let arr = [];
    for (let i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }

    let tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}

function dataViewToBytes(dataView) {
    const bytes = [];
    for (let i = 0; i < dataView.byteLength; i++) {
        bytes.push(dataView.getUint8(i));
    }
    return bytes;
}

function encodeMessage(msgType, serialNum, data) {
    let userdata = stringToUint8Array(data)
    const byteArray = new Uint8Array(26);
    let dataLen = userdata.length
    const dataView = new DataView(byteArray.buffer);
    dataView.setUint16(0, 1, false)
    dataView.setUint32(2, msgType, false)
    dataView.setBigUint64(6, serialNum, false)
    dataView.setBigUint64(14, 9999999n, false) // 这里应该是时间戳,但这个BigInt无法突破 TODO
    dataView.setUint32(22, dataLen, false)

    // 创建新的字节流，将两个字节流拼接起来
    const combinedBuffer = new Uint8Array(byteArray.length + userdata.length);
    combinedBuffer.set(byteArray, 0);
    combinedBuffer.set(userdata, byteArray.length);


    let checkSum = crc.crc32(combinedBuffer)

    // 把checkSum拼接到最后
    let result = new Uint8Array(combinedBuffer.length + 4);
    result.set(combinedBuffer);
    const finalView = new DataView(result.buffer);
    finalView.setUint32(26 + dataLen, checkSum)
    return result
}

//关闭连接
let closeHiloWebSocket = () => {
    hiloWebsocket && hiloWebsocket.close();
}
export {
    hiloWebsocket,
    createHiloWebSocket,
    closeHiloWebSocket
};