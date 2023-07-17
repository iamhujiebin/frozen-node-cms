import {Col, Divider, Input, Row, Tabs} from "antd";
import WordBlock from "@/pages/Word/WordBlock";
import {useEffect, useState} from "react";

const {TextArea} = Input

const items = ['常用', '人物', '角色', '五官', '表情', '头发', '装饰', '服装', '鞋饰', '尾&翅&角', '姿势', '动作', '环境', '风格']

function WordContent({setContent}) {

    return (
        <>
            <div>
                <Divider orientation="left">其他常用</Divider>
                <Row gutter={[16, 24]}>
                    {items.map((item, index) => (
                        <Col key={index}>
                            <WordBlock id={index} content={item} setContent={setContent}></WordBlock>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

function Word() {
    const [value, setValue] = useState('')
    const [content, setContent] = useState({list: {}})
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
                items={items.map((item, i) => {
                    const id = String(i);
                    return {
                        label: `${item}`,
                        key: id,
                        disabled: i === 28,
                        children: (
                            <div>
                                <WordContent setContent={setContent}/>
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
                style={{float: "left", width: "30%", height: 520, marginBottom: 24, resize: 'none'}}
            />
        </div>
    )
}

export default Word