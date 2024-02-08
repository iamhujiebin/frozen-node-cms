import {Radar} from "@ant-design/plots";
import {useEffect, useState} from "react";
import {httpMgr} from "@/utils/http_hilo";
import {message} from "antd";

const initData = [
    {
        name: '水果机',
        cnt: 10371,
    },
    {
        name: '赛车',
        cnt: 7380,
    },
    {
        name: '送礼',
        cnt: 7414,
    },
    {
        name: '上麦',
        cnt: 2140,
    },
];

function UserEvent({code}) {
    const [data, setData] = useState(initData)
    useEffect(() => {
        asyncFetch();
    }, [code])
    const asyncFetch = () => {
        if (code?.length > 0) {
            httpMgr("/v1/dashboard/user/move?code=" + code).then(res => {
                if (res.data) {
                    setData(res.data)
                }
            }).catch(e => {
                message.error(e)
            })
        }
    };
    const config = {
        data: data.map((d) => ({...d, star: Math.sqrt(d.star)})),
        xField: 'name',
        yField: 'cnt',
        appendPadding: [0, 10, 0, 10],
        meta: {
            cnt: {
                alias: '操作次数',
                min: 0,
                nice: true,
                formatter: (v) => Number(v).toFixed(2),
            },
        },
        xAxis: {
            tickLine: null,
        },
        yAxis: {
            label: false,
            grid: {
                alternateColor: 'rgba(0, 0, 0, 0.04)',
            },
        },
        // 开启辅助点
        point: {
            size: 2,
        },
        area: {},
    };
    return (
        <div className={"dashboard-chart"}>
            <Radar {...config}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    用户{code}的操作占比
                </strong>
            </div>
        </div>
    )
}

export default UserEvent