import React, {useRef} from 'react';
import {Button, Space, Swiper, Toast} from 'antd-mobile';
import Home from "@/pages/Home";

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
const items = colors.map((color, index) => (<Swiper.Item key={index}>
    <div style={{background: color}} onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`);
    }}>
        {index + 1}
    </div>
</Swiper.Item>));
const Hilo = () => {
    const ref = useRef(null);
    return (<>

        <div title='自动播放'>
            <Swiper autoplay>{items}</Swiper>
        </div>

        <div title='循环'>
            <Swiper loop autoplay onIndexChange={i => {
                console.log(i, 'onIndexChange1');
            }}>
                {items}
            </Swiper>
        </div>
    </>);
};

export default Hilo