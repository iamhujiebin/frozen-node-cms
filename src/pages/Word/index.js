import {Col, Divider, Input, Row, Tabs} from "antd";
import WordBlock from "@/pages/Word/WordBlock";
import {useEffect, useState} from "react";
import {http} from "@/utils";

const {TextArea} = Input

const items = ['常用', '人物', '角色', '五官', '表情', '头发', '装饰', '服装', '鞋饰', '尾&翅&角', '姿势', '动作', '环境', '风格']

function WordContent({subTabs, setContent}) {

    return (
        <div>
            {
                subTabs.map(item => (
                    <div>
                        <Divider orientation="left">{item.name.zh}</Divider>
                        <Row gutter={[16, 24]}>
                            {
                                item.prompts.map((prompts, index) => (
                                    <Col key={index}>
                                        <WordBlock id={prompts.code} content={prompts.zh}
                                                   setContent={setContent}></WordBlock>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                ))
            }
        </div>
    )
}

function Word() {
    const [data, setData] = useState([])
    const [value, setValue] = useState('')
    const [content, setContent] = useState({list: {}})
    useEffect(() => {
        http.get("/ai/prompts").then(r => {
            console.log(r.data)
            setData(r.data)
        })
    }, [])
    useEffect(() => {
        let valueList = []
        for (let id in content.list) {
            let data = content.list[id]
            if (data.content?.length > 0) {
                if (data.mul === 1) {
                    valueList.push(data.content)
                } else {
                    valueList.push(`(${data.content}:${data.mul.toFixed(1)})`)
                }
            }
        }
        setValue(valueList.join(","))
    }, [content])
    return (
        <div style={{width: "100%"}}>
            <Tabs
                defaultActiveKey="1"
                tabPosition={"top"}
                size={"large"}
                style={{
                    height: 220,
                    width: "70%",
                    float: "left",
                }}
                items={data.map((item, i) => {
                    const id = String(i);
                    return {
                        label: `${item.name.zh}`,
                        key: id,
                        disabled: i === 28,
                        children: (
                            <div>
                                <WordContent subTabs={item.subTabs} setContent={setContent}/>
                            </div>
                        ),
                    };
                })}
            />
            <TextArea
                size={"large"}
                value={value}
                showCount
                maxLength={100}
                style={{
                    float: "left",
                    width: "30%",
                    height: 520,
                    marginBottom: 24,
                    resize: 'none',
                    marginTop: 15,
                }}
            />
        </div>
    )
}

export default Word