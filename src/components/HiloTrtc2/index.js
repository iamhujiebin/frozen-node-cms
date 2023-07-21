import TRTC from 'trtc-js-sdk';
import {useEffect} from "react";
import {Button} from "antd";

const HiloTrtc2 = () => {
    let client = null
    useEffect(() => {
        client = TRTC.createClient({
            mode: "live",
            sdkAppId: 40000066,
            userId: "da9e12a3b4de4aa9b7620e49ec5219bc",
            userSig: "eJwtzcsOgjAQBdB-6VZDoJSWIXHjC6IkLtTEsGvpgNVoeMdH-HcVmN09yb3zJod4b3VYkYBQyybTPhuN98ZkpmctAR0qXcU0MilBCU5tZICpRx1Q6dip9VUWhdEkYPb-OB*8MTckgcN9AAGc*4PiozDV34UPvusIW4wrJv*9XF627mZymq-LtuRZ2MSQnDv1zOpFEppdXr5o5GkZrdrsOCOfL4XgOTc_",
            useStringRoomId: true,
            autoSubscribe: true// 默认为 true 即自动订阅
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
    const enterRoom = () => {
        client
            .join({roomId: "HTGS#a93989299", role: 'anchor'})
            .then(() => {
                console.log('进房成功', 'da9e12a3b4de4aa9b7620e49ec5219bc');
            })
            .catch(error => {
                console.error('进房失败，请稍后再试' + error);
            });
    }
    return (
        <>
            hello trtc2
            <Button onClick={enterRoom}>加入房间</Button>
        </>
    );
};

export default HiloTrtc2;
