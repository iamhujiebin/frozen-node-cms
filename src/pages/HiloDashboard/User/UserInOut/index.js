import {Waterfall} from '@ant-design/plots';
import {useEffect, useState} from "react";
import {httpMgr} from "@/utils/http_hilo";
import {message} from "antd";

const initData = [
    {
        type: '赛车奖励',
        diamond: 120,
    },
    {
        type: '赛车花费',
        diamond: -2200,
    },
    {
        type: '水果机奖励',
        diamond: 900,
    },
    {
        type: '游戏花费',
        diamond: 300,
    },
    {
        type: '游戏奖励',
        diamond: 1200,
    },
    {
        type: '充值',
        diamond: 1000,
    },
    {
        type: '送礼',
        diamond: -2000,
    },
];


function UserInOut({code}) {
    const [data, setData] = useState(initData)
    useEffect(() => {
        asyncFetch();
    }, [code])
    const asyncFetch = () => {
        if (code?.length > 0) {
            httpMgr("/v1/dashboard/user/consume?code=" + code).then(res => {
                setData(res.data)
            }).catch(e => {
                message.error(e)
            })
        }
    };
    const config = {
        data,
        xField: 'type',
        yField: 'diamond',
        meta: {
            type: {
                alias: '类别',
            },
            diamond: {
                alias: '收支',
                formatter: (v) => `${v}`,
            },
        },
        animation: {
            appear: {
                animation: 'scale-in-y',
                duration: 2000,
            },
        },
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
        },
        total: {
            label: '总支出',
            style: {
                fill: '#0536fa',
            },
        },
    };
    return (
        <div className={"dashboard-chart"}>
            <Waterfall {...config} />
            <div style={{textAlign: "center"}}>
                <strong>
                    用户{code}黄钻收入/支出
                </strong>
            </div>
        </div>
    )
}

export default UserInOut