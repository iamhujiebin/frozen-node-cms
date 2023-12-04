import React, {useState} from 'react';
import {Button, Divider, Input} from 'antd';
const { TextArea } = Input;
function HandyQRCode() {
    const [value, setValue] = useState('')
    const [res, setRes] = useState('')
    const [result, setResult] = useState('')
    return (
        <div>
            <TextArea rows={2} value={value} onChange={(e) => setValue(e.target.value)}/>
            <Divider/>
            <Button onClick={() => {
                const res = window.wasmGenerateQRCode(value)
                setResult(res)
                setRes(value)
            }
            }
            >Encode</Button>
            <Divider/>
            {result &&
                <>
                    <strong>Infomation: </strong>
                    {res}
                    <br/>
                    <br/>
                    <strong>QR Code:</strong>
                    <img src={"data:image/png;base64, "+result} alt="QR Code" />
                </>
            }
        </div>
    )
}
export default HandyQRCode;