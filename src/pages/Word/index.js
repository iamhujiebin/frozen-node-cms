import {Col, Divider, Input, Row, Tabs} from "antd";
import WordBlock from "@/pages/Word/WordBlock";
import {useEffect, useRef, useState} from "react";
import {http} from "@/utils";

const {TextArea} = Input

function WordContent({subTabs, setContent}) {
    return (
        <div>
            {
                subTabs.map(item => (
                    <div>
                        <Divider orientation="left">{item.name.zh}</Divider>
                        <Row gutter={[3, 16]}>
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
    const followDivRef = useRef(null)

    const handleScroll = () => {
        this.followDivRef.current.style.top = window.pageYOffset + 'px';
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return window.removeEventListener('scroll', handleScroll);
    }, [])

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
            <div style={{height: "auto", width: "70%", float: "left"}}>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={"top"}
                    size={"large"}
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
            </div>
            <div
                ref={followDivRef}
                style={{
                    float: "right",
                    width: "25%",
                    marginBottom: 24,
                    marginTop: 15,
                    position: "fixed",
                    top: 100,
                    right: 10,
                }}>
                <TextArea
                    size={"large"}
                    value={value}
                    showCount
                    maxLength={100}
                    style={{
                        height: 520,
                    }}
                />
            </div>
        </div>
    )
}

export default Word