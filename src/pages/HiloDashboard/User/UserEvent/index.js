import {Radar} from "@ant-design/plots";

const data = [
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

function UserEvent({code}) {
    return (
        <div>
            <Radar {...config} style={{height: 388, width: 388}}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    用户{code}的操作占比
                </strong>
            </div>
        </div>
    )
}

export default UserEvent