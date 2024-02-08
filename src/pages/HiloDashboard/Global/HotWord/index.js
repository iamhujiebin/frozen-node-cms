import {WordCloud} from "@ant-design/charts";
import {useEffect, useState} from "react";
import {httpMgr} from "@/utils/http_hilo";
import {message} from "antd";

const initData = [{
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


function HotWord({todoForInputValues}) {
    const [data, setData] = useState(initData)
    useEffect(() => {
        asyncFetch();
    }, [])
    const asyncFetch = () => {
        httpMgr("/v1/dashboard/day/hot").then(res => {
            if (res.data) {
                setData(res.data)
            }
        }).catch(e => {
            message.error(e)
        })
    };
    const config = {
        data,
        wordField: 'name',
        weightField: 'value',
        colorField: 'name',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [16, 64],
            // rotation: 0,
        },
        imageMask: "https://api.frozenhu.cn/uploads/file/hilo.png",
        // 返回值设置成一个 [0, 1) 区间内的值，
        // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
        random: () => 0.5,
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return (
        <div className={"dashboard-chart"}>
            <WordCloud {...config}/>
            <div style={{textAlign: "center"}}>
                <strong>
                    搜索用户/房间热门词
                </strong>
            </div>
        </div>
    )
}

export default HotWord