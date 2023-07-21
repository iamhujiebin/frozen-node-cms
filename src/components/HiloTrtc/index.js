import "./index.css"
import TRTC from 'trtc-js-sdk';
import {useEffect} from "react";

const HiloTrtc = () => {
    let client = null
    useEffect(() => {
        let client = TRTC.createClient({
            mode: "rtc",
            sdkAppId: 40000066,
            userId: "27338733ef9347ff87d6a0c50cd5657e",
            userSig: "eJwtzU0LgkAQBuD-sueQ1f0WOvR1ECwDhbqauxtTmptKGNF-T9OBObwPzDsflMWp9zINClHgYbT4Z9Dm0YGFiQUhclhjFaHCWik0z3HBcKEZZ8LMN62*586BRiHF43A*eQeVQaHPpZKU8oBNanoHzehicOILLOYWuA4vIVbOJvpZlSDOOl9Ffb15b1MoD8nJ1f5xne327c0oe4mW6PsDFi44tQ__",
            useStringRoomId: true,
        });
        client.on('stream-added', event => {
            const remoteStream = event.stream;
            console.log('远端流增加: ' + remoteStream.getId());
            //订阅远端流
            client.subscribe(remoteStream);
        });
        client.on('peer-join', event => {
            console.log("peer-join", event)
        })
        client
            .join({roomId: "HTGS#a93989299", role: "audience"})
            .then(() => {
                console.log('进房成功');
            })
            .catch(error => {
                console.error('进房失败，请稍后再试' + error);
            });
        client.on('stream-subscribed', event => {
            const remoteStream = event.stream;
            console.log('远端流订阅成功：' + remoteStream.getId());
            // 创建播放容器
            let remotePlayerElement = document.createElement('div');
            remotePlayerElement.id = 'remote-stream-' + remoteStream.getId();
            document.body.appendChild(remotePlayerElement);
            // 开始播放远端流，传入 play 方法的 Element ID 必须是页面里存在的 div 元素
            remoteStream.play(remotePlayerElement.id);
        });


    }, [])
    return (
        <>
            hello trtc
        </>
    );
};

export default HiloTrtc;
