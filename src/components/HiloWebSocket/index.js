import {PubSub} from 'pubsub-js';
import crc from "crc";
import {HeartBeat, Login, GlobalGiftBanner} from "@/proto/userProxy_pb"

let hiloWebsocket, hiloLockReconnect = false;
let createHiloWebSocket = (url) => {
    hiloWebsocket = new WebSocket(url);
    hiloWebsocket.onopen = function () {
        // login
        console.log("connected!")
        let login = new Login();
        login.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjc2NTcwOTEsIkV4dGVybmFsSWQiOiIyNzMzODczM2VmOTM0N2ZmODdkNmEwYzUwY2Q1NjU3ZSIsImV4cCI6MjU1MzIyNzI1NCwiaXNzIjoiaGlsb0FwaSJ9.bcM1JlBlPlUIrmSS139klm_Zs-sdb3g0drtaP2Mz0NE")
        const binaryData = login.serializeBinary();
        hiloWebsocket.send(encodeMessage(1, serialNum, binaryData));

        // heartbeat
        hiloHeartCheck.reset().start();
    }
    hiloWebsocket.onerror = function () {
        hiloReconnect(url);
    };
    hiloWebsocket.onclose = function (e) {
        console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
        // hiloReconnect(url);
    }
    hiloWebsocket.onmessage = function (event) {
        hiloLockReconnect = true;
        //event 为服务端传输的消息，在这里可以处理
        readBlob(event.data)
            .then(data => {
                // 读取成功，data为ArrayBuffer类型的数据
                let decode = decodeMessage(data)
                // console.log("解码成功:", decode)
                if (decode.msgType === 115) { // 送礼的
                    const gift = GlobalGiftBanner.deserializeBinary(decode.userdata);
                    PubSub.publish('gift_send', gift);
                }
            })
            .catch(error => {
                // 读取失败
                console.error("解码失败:", error)
            });
    }
}

function readBlob(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = () => {
            reject(new Error('Failed to read the Blob'));
        };

        reader.readAsArrayBuffer(blob);
    });
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
            let heartbeat = new HeartBeat();
            heartbeat.setExternaluid("e8694cf742454f25bf6bca833cdfa818")
            const binaryData = heartbeat.serializeBinary();
            hiloWebsocket.send(encodeMessage(3, serialNum, binaryData));
            serialNum++
        }, this.timeout)
    }
}

function encodeMessage(msgType, serialNum, userdata) {
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

function decodeMessage(encodedData) {
    const dataView = new DataView(encodedData);

    const msgType = dataView.getUint32(2, false);
    const serialNum = dataView.getBigUint64(6, false);
    const timestamp = dataView.getBigUint64(14, false);
    const dataLen = dataView.getUint32(22, false);

    const userdata = encodedData.slice(26, 26 + dataLen);

    return {
        msgType,
        serialNum,
        timestamp,
        userdata,
    };
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
