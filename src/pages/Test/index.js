import React, {useState, useEffect} from 'react';
import {PubSub} from 'pubsub-js';
import "./index.css"
import {createHiloWebSocket, closeHiloWebSocket} from "@/components/HiloWebSocket";
import FloatingImage from "@/components/FloatingImage";

const Test = () => {
    const [show, setShow] = useState(false)
    const [gift, setGift] = useState({})

    useEffect(() => {
        // createHiloWebSocket("ws://127.0.0.1:8082/ws");
        createHiloWebSocket("wss://test.ws.faceline.live/ws");
        return closeHiloWebSocket()
    }, []);

    let messageSocket = null
    useEffect(() => {
        // console.log("listening to message")
        //订阅 'message' 发布的发布的消息
        if (!messageSocket) {
            messageSocket = PubSub.subscribe('gift_send', function (topic, message) {
                //message 为接收到的消息
                // 重新加载消息列表
                console.log("recieve gift send:", topic, message)
                setGift(message)
                // setImg(message.getGiftpicurl())
                setShow(true)
            })
        }
        //卸载组件 取消订阅
        return () => {
            PubSub.unsubscribe(messageSocket);
        }
    })

    return (
        <>
            <p>测试hilo websocket</p>
            {show &&
                <FloatingImage setShow={setShow}
                               gift={gift}/>
            }
        </>
    );
};

export default Test;
