import React, {useEffect, useState} from 'react';
import './index.css';
import {Grid, Space} from "antd-mobile";
import {closeHiloWebSocket, createHiloWebSocket} from "@/components/HiloWebSocket";
import {PubSub} from "pubsub-js";

const FloatingImage = () => {
    const [show, setShow] = useState(false)
    const [gift, setGift] = useState(null)
    const [giftList, setGiftList] = useState([])
    // 礼物banner
    useEffect(() => {
        createHiloWebSocket("wss://ws.faceline.live/ws");
        return closeHiloWebSocket()
    }, []);

    let messageSocket = null
    useEffect(() => {
        // 订阅 'message' 发布的发布的消息
        if (!messageSocket) {
            messageSocket = PubSub.subscribe('gift_send', function (topic, message) {
                // 重新加载消息列表
                console.log("recieve gift send:", topic, message)
                setGiftList(pre => {
                    return [...pre, message]
                })
                console.log("gift list append:", giftList)
            })
        }
        //卸载组件 取消订阅
        return () => {
            PubSub.unsubscribe(messageSocket);
        }
    })
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        // 添加飘入动画
        setAnimationClass('float-in');

        // 一秒后添加飘出动画
        const timeout = setTimeout(() => {
            setAnimationClass('float-out');
        }, 2000);
        //
        const timeout2 = setTimeout(() => {
            setShow(false)
        }, 3000);

        // 清除监听器和计时器
        return () => {
            clearTimeout(timeout);
            clearTimeout(timeout2);
        };
    }, [gift]);

    useEffect(() => {
        if (!show && giftList.length > 0) {
            setShow(true)
            setGift(giftList[0])
            setGiftList(pre => {
                if (pre.length <= 1) {
                    setGiftList([])
                } else {
                    setGiftList(pre.slice(1, pre.length))
                }
            })
        }
    }, [giftList, show])

    return (
        <div className={"float-div"} style={{zIndex: show ? 1 : -1}}>
            {show && (<div id="floating-image" className={animationClass}
                           style={{
                               height: 40,
                               width: 240,
                               backgroundColor: "#e9aefd",
                               padding: 5,
                               borderRadius: "5%",
                               marginLeft: "auto",
                               marginRight: "auto"
                           }}>
                    <Grid columns={10}>
                        <Grid.Item span={2}>
                            <img src={gift?.getSenduseravatar()} alt=''
                                 style={{width: 30, height: 30, borderRadius: "50%"}}/>
                        </Grid.Item>
                        <Grid.Item span={6}>
                            <Space direction='vertical' style={{"--gap": "-10px"}}>
                                <p style={{color: "orange"}}>{gift?.getSendusernick()}</p>
                                <p>Send <span
                                    style={{color: "orange"}}>{gift?.getReceiveusernick().slice(0, 7)}</span> gift
                                    <span style={{color: "orange"}}>x{gift?.getGiftnum()}</span>
                                </p>
                            </Space>
                        </Grid.Item>
                        <Grid.Item span={2}>
                            <img src={gift?.getGiftpicurl()} alt=''
                                 style={{width: 30, height: 30, borderRadius: "50%"}}/>
                        </Grid.Item>
                    </Grid>
                </div>
            )}
        </div>
    )
};

export default FloatingImage;
