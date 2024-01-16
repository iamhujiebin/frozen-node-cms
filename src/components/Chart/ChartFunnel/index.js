import {Funnel} from "@ant-design/plots";

const data = [
    {
        stage: '简历筛选',
        number: 253,
    },
    {
        stage: '初试人数',
        number: 151,
    },
    {
        stage: '复试人数',
        number: 113,
    },
    {
        stage: '录取人数',
        number: 87,
    },
    {
        stage: '入职人数',
        number: 59,
    },
];
const config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    legend: false,
};

function ChartFunnel({todoForInputValues}) {
    return (
        <div style={{height: 388, width: 388}}>
            <Funnel {...config} />
            <div style={{textAlign: "center"}}>
                漏斗图
            </div>
        </div>
    )
}

export default ChartFunnel