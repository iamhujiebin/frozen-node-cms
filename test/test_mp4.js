var fs = require('fs');
var MP4Box = require('mp4box');

if (process.argv.length > 2) {
    var mp4boxfile = MP4Box.createFile();
    var arrayBuffer = new Uint8Array(fs.readFileSync(process.argv[2])).buffer;
    arrayBuffer.fileStart = 0;
    mp4boxfile.onReady = function (info) {
        // console.log("info:", info)
        mp4boxfile.onSegment = function (id, user, buffer, sampleNumber, last) {
            console.log("Received segment on track "+id+" for object "+user+" with a length of "+buffer.byteLength);
        }
        mp4boxfile.setSegmentOptions(info.tracks[0].id, arrayBuffer, options);
        var initSegs = mp4boxfile.initializeSegmentation();
        mp4boxfile.start();
    };
    mp4boxfile.appendBuffer(arrayBuffer);
} else {
    console.log("usage: node info.js <file>");
}