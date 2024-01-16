import {Radar} from "@ant-design/plots";

const data = [
    {
        name: 'G2',
        star: 10371,
    },
    {
        name: 'G6',
        star: 7380,
    },
    {
        name: 'F2',
        star: 7414,
    },
    {
        name: 'L7',
        star: 2140,
    },
];
const config = {
    data: data.map((d) => ({...d, star: Math.sqrt(d.star)})),
    xField: 'name',
    yField: 'star',
    appendPadding: [0, 10, 0, 10],
    meta: {
        star: {
            alias: 'star 数量',
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

function ChartRadar({todoForInputValues}) {
    return (
        <div style={{height: 388, width: 388}}>
            <Radar {...config} />
            <div style={{textAlign: "center"}}>
                具体某用户的操作占比:游戏-房间-活动-充值-私聊
            </div>
        </div>
    )
}

export default ChartRadar