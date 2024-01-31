import React, {useState, useEffect} from 'react';
import {Column} from '@ant-design/plots';

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
        // fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
        //     .then((response) => response.json())
        //     .then((json) => setData(json))
        //     .catch((error) => {
        //         console.log('fetch data failed', error);
        //     });
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
        <div>
            <Column {...config} style={{height: 388, width: 488}}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    日活
                </strong>
            </div>
        </div>
    )
};

export default Dau
