import React, {useEffect, useState} from 'react';
import './index.css';
import {Grid, Space} from "antd-mobile";

const FloatingImage = ({gift, setShow}) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        // 添加飘入动画
        setAnimationClass('float-in');

        // 一秒后添加飘出动画
        const timeout = setTimeout(() => {
            setAnimationClass('float-out');
        }, 1000);

        const timeout2 = setTimeout(() => {
            // setShow(false) // todo 最后打开消失
        }, 2000);

        // 清除监听器和计时器
        return () => {
            clearTimeout(timeout);
            clearTimeout(timeout2);
        };
    }, []);

    return (
        <div id="floating-image" className={animationClass}
             style={{height: 40, width: 200, backgroundColor: "#e9aefd", padding: 5, borderRadius: "5%"}}>
            <Grid columns={10}>
                <Grid.Item span={2}>
                    <img src={gift.getSenduseravatar()} alt='' style={{width: 30, height: 30, borderRadius: "50%"}}/>
                </Grid.Item>
                <Grid.Item span={6}>
                    <Space direction='vertical' style={{"--gap": "-10px"}}>
                        <p style={{color: "orange"}}>{gift.getSendusernick()}</p>
                        <p>Send <span style={{color: "orange"}}>{gift.getReceiveusernick().slice(0, 7)}</span> gift
                            <span style={{color: "orange"}}>x{gift.getGiftnum()}</span>
                        </p>
                    </Space>
                </Grid.Item>
                <Grid.Item span={2}>
                    <img src={gift.getGiftpicurl()} alt='' style={{width: 30, height: 30, borderRadius: "50%"}}/>
                </Grid.Item>
            </Grid>
        </div>
    )
};

export default FloatingImage;
