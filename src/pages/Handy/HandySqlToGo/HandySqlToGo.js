import React, {useEffect, useState} from 'react';
import {Button, Divider, Input, message} from 'antd';
import {sqlToGo} from "@/assets/js/sql-to-go";
import hljs from 'highlight.js';

const {TextArea} = Input;

function HandySqlToGo() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [html, setHtml] = useState('')
    useEffect(() => {
        document.querySelectorAll("pre").forEach(block => {
            try {
                hljs.highlightElement(block);
            } catch (e) {
            }
        });
    }, [])
    const tran = e => {
        const res = sqlToGo(value, {useGorm: true, useJson: false, useForm: false, useSqlx: false})
        setResult(res.go)
        const v = hljs.highlightAuto(res.go).value
        const h = "<pre><code>" + v + "</code></pre>"
        setHtml(h)
    }
    return (
        <>
            {/*<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>*/}
            <TextArea rows={12} value={value} onChange={(e) => setValue(e.target.value)}/>
            <div dangerouslySetInnerHTML={{__html: html}}></div>
            <Divider/>
            <Button onClick={tran}>Encode</Button>
            <Button onClick={() => navigator.clipboard.writeText(result).then(message.info('copied')).catch(e => {
                message.error('copy fail')
            })}>Copy</Button>
        </>
    )
}

export default HandySqlToGo;