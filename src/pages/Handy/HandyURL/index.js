import {Button, Divider, Input, message} from 'antd';
import {useState} from "react";

const {TextArea} = Input;

function HandyURL() {
    const [result, setResult] = useState('')
    const [value, setValue] = useState('')
    return (
        <div>
            <TextArea rows={6} value={value} onChange={(e) => setValue(e.target.value)}/>
            <Divider/>
            <Button onClick={() => {
                const res = window.wasmEncodeDecode(value, 'encode', 'url')
                setResult(res)
            }
            }
            >Encode</Button>
            <Button onClick={() => {
                const res = window.wasmEncodeDecode(value, 'decode', 'url')
                setResult(res)
            }
            }>Decode</Button>
            <Button onClick={() => {
                setResult('')
            }
            }>Clear</Button>
            <Divider plain orientation={"left"}>Result:</Divider>
            {result}
            {
                result && (
                    <Button onClick={() => navigator.clipboard.writeText(result).then(message.info('copied')).catch(e => {
                        message.error('copy fail')
                    })}>Copy</Button>)
            }
        </div>
    )
}

export default HandyURL