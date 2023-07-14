const apiid = '154701613091163251';
const appkey = '058A3D7F167744A1A380CDE4B235F521';
const token = 'biZRK+8y8XKeNnwgp3s2Qwo22b+IPtqkO2ZJb7t+7gaxrL036Pti11yJxeX6KYPC+KJHFDlQO4QQ1j3saCnqcg==';
console.log(token); // encrypted token

var axios = require("axios");
var data = JSON.stringify({
    "runModel": "10",
    "prompt": "小雨中，两对情侣，互相撒娇。风格：清新",
    "wh": "16:9",
    "callbackUrl": "https://test.apiv1.faceline.live/midJourney"
});

var config = {
    method: "post",
    url: "https://www.api-clouds.cn/apiclouds/v1/image/generate",
    headers: {
        "Content-Type": "application/json",
        "x-apiid": apiid,
        "x-token": token,
    },
    data: data
};
axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
})
    .catch(function (error) {
        console.log(error);
    });


