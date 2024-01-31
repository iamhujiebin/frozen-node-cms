import {Waterfall} from '@ant-design/plots';

const data = [
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

function UserInOut({code}) {
    return (
        <div>
            <Waterfall {...config} style={{height: 388, width: 688}}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    用户{code}黄钻收入/支出
                </strong>
            </div>
        </div>
    )
}

export default UserInOut