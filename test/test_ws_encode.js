const crc = require('crc');

const data = "hello"
console.log(stringToUint8Array(data))

const checksum = crc.crc32(data)

console.log(checksum);

const em = encodeMessage(1, 1688440551n, data)
console.log(em.toString())

function stringToUint8Array(str) {
    let arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }

    let tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array
}

function encodeMessage(msgType, serialNum, data) {
    let userdata = stringToUint8Array(data)
    const msg = Buffer.alloc(26);
    const dataLen = userdata.length;

    msg.writeUInt16BE(1, 0);
    msg.writeUInt32BE(msgType, 2);
    msg.writeBigUint64BE(serialNum, 6);
    msg.writeBigUint64BE(BigInt(1688440551), 14);
    msg.writeUInt32BE(dataLen, 22);

    const newMsg = Buffer.concat([msg, userdata]);

    const checkSum = crc.crc32(newMsg);
    const checksumBuffer = Buffer.alloc(4);
    checksumBuffer.writeUInt32BE(checkSum, 0);

    return Buffer.concat([newMsg, checksumBuffer]);
}