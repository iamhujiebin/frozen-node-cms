import React, {useEffect, useState} from 'react';
import {jsonToGo} from "@/assets/js/json-to-go";
import {sqlToGo} from "@/assets/js/sql-to-go";
import {Button, Input} from "antd";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import go from 'highlight.js/lib/languages/go'

const {TextArea} = Input;

const Test = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [html, setHtml] = useState('')
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
        // const res = jsonToGo(value, 'AutoGenerate', true, true, true)
        const res = sqlToGo(value, {useGorm: 1, useJson: 1, useSqlx: 1, useForm: 1})
        setResult(res.go)
        const v = hljs.highlightAuto(result).value
        const h = "<pre><code>" + v + "</code></pre>"
        setHtml(h)
    }
    return (
        <div>
            <TextArea rows={6} value={value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            {/*{result.length > 0 && (*/}
            {/*    <div>*/}
            {/*    <pre id={'code-go'} className={'go'}>*/}
            {/*        <code>*/}
            {/*            <TextArea row={18} value={result}/>*/}
            {/*        </code>*/}
            {/*    </pre>*/}
            {/*    </div>*/}
            {/*)*/}
            {/*}*/}
            <div dangerouslySetInnerHTML={{__html: html}}></div>
            <Button onClick={tran}>渲染</Button>
        </div>
    );
};

export default Test;
