import {WordCloud} from "@ant-design/charts";

const data = [{
    "name": "Frozen",
    "value": 1383219999,
    "category": "user"
}, {
    "name": "222",
    "value": 1315999999,
    "category": "user"
}, {
    "name": "99",
    "value": 324981999,
    "category": "user"
}, {
    "name": "110000",
    "value": 263509999,
    "category": "user"
}, {
    "name": "10000",
    "value": 207504999,
    "category": "room"
}, {
    "name": "10167",
    "value": 196458999,
    "category": "room"
}]
const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [8, 32],
        rotation: 0,
    },
    // 返回值设置成一个 [0, 1) 区间内的值，
    // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
    random: () => 0.5,
    interactions: [
        {
            type: 'element-active',
        },
    ],
};

function HotWord({todoForInputValues}) {
    return (
        <div>
            <WordCloud {...config} style={{height: 288, width: 488}}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    搜索用户/房间热门词
                </strong>
            </div>
        </div>
    )
}

export default HotWord