import React, {useState, useEffect} from 'react';
import {Line} from '@ant-design/plots';
import {httpMgr} from "@/utils/http_hilo";
import {message} from "antd";

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
        httpMgr("/v1/dashboard/day/charge").then(res => {
            setData(res.data)
        }).catch(e => {
            message.error(e)
        })
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
            <Line {...config} className={"dashboard-chart"}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    日充
                </strong>
            </div>
        </div>
    )
};

export default DayCharge
