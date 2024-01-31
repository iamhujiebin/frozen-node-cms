import React, {useState, useEffect} from 'react';
import {Line} from '@ant-design/plots';

const initData = [
    {
        name: "全区",
        day: "2024-01-31",
        charge: 18842.1
    },
    {
        name: "阿语区",
        day: "2024-01-31",
        charge: 9921.0
    },
    {
        name: "非阿语区",
        day: "2024-01-31",
        charge: 9843.1
    },
    {
        name: "全区",
        day: "2024-01-30",
        charge: 16842.1
    },
    {
        name: "阿语区",
        day: "2024-01-30",
        charge: 9021.0
    },
    {
        name: "非阿语区",
        day: "2024-01-30",
        charge: 9943.1
    },
    {
        name: "全区",
        day: "2024-01-29",
        charge: 20842.1
    },
    {
        name: "阿语区",
        day: "2024-01-29",
        charge: 7921.0
    },
    {
        name: "非阿语区",
        day: "2024-01-29",
        charge: 11843.1
    },
]

const DayCharge = () => {
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
        xField: 'day',
        yField: 'charge',
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v) => `$${v}`,
            },
        },
        legend: {
            position: 'top',
        },
        // smooth: true,
        animation: {
            appear: {
                animation: 'wave-in',
                duration: 2000,
            },
        },
    };

    return (
        <div>
            <Line {...config} style={{height: 388, width: 488}}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    日充
                </strong>
            </div>
        </div>
    )
};

export default DayCharge
