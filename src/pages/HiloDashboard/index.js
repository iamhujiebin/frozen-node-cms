import React from 'react';
import {Tabs} from "antd";
import Global from "@/pages/HiloDashboard/Global";
import User from "@/pages/HiloDashboard/User";

const items = [
    {
        id: "1",
        key: "1",
        label: "全局数据",
        children: <Global/>
    },
    {
        id: "2",
        key: "2",
        label: "用户画像",
        children: <User/>
    }
]

const HiloDashboard = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <Tabs
            onChange={onChange}
            type="card"
            items={items}
        />
    );
};

export default HiloDashboard
