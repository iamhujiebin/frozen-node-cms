import React, {useState, useEffect} from 'react';
import {Column} from '@ant-design/plots';
import {httpMgr} from "@/utils/http_hilo";
import {message} from "antd";

const initData = [
    {
        name: "全区",
        day: "2024-01-31",
        dau: 19921
    },
    {
        name: "阿语区",
        day: "2024-01-31",
        dau: 9921
    },
    {
        name: "非阿语区",
        day: "2024-01-31",
        dau: 9843
    },
    {
        name: "阿语区",
        day: "2024-01-30",
        dau: 9021
    },
    {
        name: "非阿语区",
        day: "2024-01-30",
        dau: 9943
    },
    {
        name: "阿语区",
        day: "2024-01-29",
        dau: 7921
    },
    {
        name: "非阿语区",
        day: "2024-01-29",
        dau: 11843
    },
]

const Dau = () => {
    const [data, setData] = useState(initData);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        httpMgr("/v1/dashboard/day/user").then(res => {
            if (res.data) {
                setData(res.data)
            }
        }).catch(e => {
            message.error(e)
        })
    };
    const config = {
        data,
        isGroup: true,
        xField: 'day',
        yField: 'dau',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `${v}`,
            },
        },
        legend: {
            position: 'top',
        },
        animation: {
            appear: {
                animation: 'scale-in-y',
                duration: 2000,
            },
        },
        tooltip: {
            formatter: (item) => ({
                name: `${item.name}`,
                value: item.dau,
            }),
        },
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
        },
    };

    return (
        <div className={"dashboard-chart"}>
            <Column {...config}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    日活
                </strong>
            </div>
        </div>
    )
};

export default Dau
