import {Button, Divider, Input, message} from "antd";
import {useState} from "react";

function HandyTimeConverter() {
    const [value, setValue] = useState(Date.parse(new Date()) / 1000)
    const [value2, setValue2] = useState('')
    const [result, setResult] = useState('')
    return (
        <div>
            <Input addonBefore="UnixTime" maxLength={10} style={{width: 500}} value={value} type={'number'}
                   placeholder={Date.parse(new Date()) / 1000}
                   onChange={(e) => setValue(e.target.value)}
            />
            <Divider/>
            <Input addonBefore="DateTime" maxLength={30} style={{width: 500}} value={value2}
                   placeholder='2006-01-02 15:04:05'
                   onChange={(e) => setValue2(e.target.value)}
            />
            <Divider/>
            <Button onClick={() => {
                const date = window.wasmUnixTimeConverter(parseInt(value))
                let timestamp = Date.parse(new Date()) / 1000;
                const diff = window.wasmHumanReadableTimediff(parseFloat(timestamp - parseInt(value)))
                setResult(date + ' (' + diff + ')')
            }
            }>Convert</Button>
            <Button onClick={() => {
                setValue(Date.parse(new Date()) / 1000)
            }}>Reset</Button>
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

export default HandyTimeConverter