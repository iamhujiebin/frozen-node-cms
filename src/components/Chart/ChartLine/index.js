import {Line} from '@ant-design/charts';

const data = [
    {year: '1991', value: 3},
    {year: '1992', value: 4},
    {year: '1993', value: 3.5},
    {year: '1994', value: 5},
    {year: '1995', value: 4.9},
    {year: '1996', value: 6},
    {year: '1997', value: 7},
    {year: '1998', value: 9},
    {year: '1999', value: 13},
];
const config = {
    data,
    // height: 189,
    autoFix: true,
    xField: 'year',
    yField: 'value',
    point: {
        size: 4,
        shape: 'diamond',
    },
};

function ChartLine({todoForInputValues}) {
    return (
        <div style={{height: 388, width: 488}}>
            <Line {...config} />
            <div style={{textAlign: "center"}}>
                每天的DAU/每天的充值?
            </div>
        </div>
    )
}

export default ChartLine