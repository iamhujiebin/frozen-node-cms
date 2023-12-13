import React, {useEffect, useState} from 'react';
import {jsonToGo} from "@/assets/js/json-to-go";
import {Button, Input} from "antd";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import go from 'highlight.js/lib/languages/go'

const {TextArea} = Input;

const Test = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [tri, setTri] = useState(0)
    useEffect(() => {
        hljs.registerLanguage('go', go)
        document.querySelectorAll("pre").forEach(block => {
            try {
                hljs.highlightElement(block);
            } catch (e) {
                // console.log(e);
            }
        });
    }, [result])
    const tran = e => {
        // 检查是否已经设置了dataset.highlighted属性
        const res = jsonToGo(value, 'AutoGenerate', true, true, true)
        setResult(res.go)
        setTri(1)
    }
    return (
        <div>
            <TextArea rows={6} value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            {tri === 1 && (
                <div>
                <pre id={'code-go'} className={'go'}>
                    <code>
                        <TextArea value={result}/>
                    </code>
                </pre>
                </div>
            )
            }
            <Button onClick={tran}>渲染</Button>
        </div>
    );
};

export default Test;
