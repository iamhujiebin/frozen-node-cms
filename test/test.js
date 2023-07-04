const crc = require('crc');

function stringToUint8Array(str) {
    let arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
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

const msgType = 1
const serialNum = 1n
const now = 11111n

const msg = 'hello'
let msgArr = stringToUint8Array(msg)

// 创建一个8字节的字节流
const byteArray = new Uint8Array(26);
let dataLen = msgArr.length
const dataView = new DataView(byteArray.buffer);
dataView.setUint16(0, 1, false)
dataView.setUint16(2, msgType, false)
dataView.setBigUint64(6, serialNum, false)
dataView.setBigUint64(14, now, false)
dataView.setUint32(22, dataLen, false)

// 创建新的字节流，将两个字节流拼接起来
const combinedBuffer = new Uint8Array(byteArray.length + msgArr.length + 4);
combinedBuffer.set(byteArray, 0);
combinedBuffer.set(msgArr, byteArray.length);


let checkSum = crc.crc32(combinedBuffer)
console.log("cs:", checkSum)
const finalView = new DataView(combinedBuffer.buffer);
console.log(finalView)
finalView.setUint32(26 + dataLen, checkSum)
const decoder = new TextDecoder('utf-8');
const str = decoder.decode(finalView);
console.log(str)
console.log(dataViewToBytes(finalView))

var timestamp = Math.floor(Date.now() / 1000);
console.log(timestamp)