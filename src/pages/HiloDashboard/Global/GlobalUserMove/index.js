import {Pie} from '@ant-design/charts';
import {useState} from "react";

const initData = [
    {
        type: '水果机',
        value: 27,
    },
    {
        type: '金币游戏',
        value: 25,
    },
    {
        type: '赛车',
        value: 18,
    },
    {
        type: '下麦',
        value: 15,
    },
    {
        type: '送礼',
        value: 10,
    },
    {
        type: '其他',
        value: 5,
    },
];


function GlobalUserMove({todoForInputValues}) {
    const [data, setData] = useState(initData)
    const config = {
        data,
        appendPadding: 10,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({percent}) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <div>
            <Pie {...config} style={{height: 388, width: 488}}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    用户操作占比
                </strong>
            </div>
        </div>
    )
}

export default GlobalUserMove