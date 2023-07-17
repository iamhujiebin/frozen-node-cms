import {Button} from "antd";
import {useState} from "react";

function WordBlock({id, content, setContent}) {
    const [show, setShow] = useState(false)
    const [mul, setMul] = useState(1)
    const onSelect = () => {
        const tmpShow = !show
        setShow(prevState => !prevState)
        setContent(prevState => {
            if (tmpShow) {
                prevState.list[id] = {
                    "content": `${content}`,
                    "mul": mul
                }
            } else {
                prevState.list[id] = {}
                setMul(1)
            }
            prevState.list[id].mul = mul
            console.log(prevState)
            return {list: prevState.list}
        })
    }
    const onMul = (add) => {
        let newNul = mul
        if (add) {
            newNul = mul + 0.1
        } else {
            newNul = mul - 0.1
        }
        setMul(newNul)
        setContent(prevState => {
            prevState.list[id] = {
                "content": `${content}`,
                "mul": newNul
            }
            console.log(prevState)
            return {list: prevState.list}
        })
    }
    return (
        <div>
            {show &&
                (
                    <Button type="primary" danger shape="circle" onClick={() => onMul(false)}>
                        -
                    </Button>
                )
            }
            <Button type="primary" onClick={onSelect}>{content}</Button>
            {show &&
                (
                    <Button type="primary" shape="circle" onClick={() => onMul(true)}>
                        +
                    </Button>
                )
            }
        </div>
    )
}

export default WordBlock