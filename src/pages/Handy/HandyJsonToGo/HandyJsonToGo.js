import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Divider, Input} from 'antd';
import {jsonToGo} from "@/assets/js/json-to-go";
import hljs from "highlight.js";

const {TextArea} = Input;
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['inline', 'example', 'omitempty'];
const defaultCheckedList = ['inline', 'omitempty'];

function HandyJsonToGo() {
    // 初始话hljs
    useEffect(() => {
        document.querySelectorAll("pre").forEach(block => {
            try {
                hljs.highlightElement(block);
            } catch (e) {
            }
        });
    }, [])
    const [value, setValue] = useState('')
    const [html, setHtml] = useState('')
    const [typeName, setTypeName] = useState('')
    const tran = e => {
        let inline = true
        let example = false
        let omitempty = false
        checkedList.map(item => {
            if (item === 'inline') {
                inline = false
            }
            if (item === 'example') {
                example = true
            }
            if (item === 'omitempty') {
                omitempty = true
            }
        })
        let name = typeName
        if (name.length <= 0) {
            name = 'AutoGenerate'
        }
        const res = jsonToGo(value, name, inline, example, omitempty)
        const v = hljs.highlightAuto(res.go).value
        const h = "<pre><code>" + v + "</code></pre>"
        setHtml(h)
    }

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const checkAll = plainOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
    const onChange = (list) => {
        setCheckedList(list);
    };
    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
    };
    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                Check all
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange}/>
            <Input style={{width: 300}} placeholder={'typename'} value={typeName}
                   onChange={e => setTypeName(e.target.value)}/>
            {/*<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>*/}
            <TextArea rows={12} value={value} onChange={(e) => setValue(e.target.value)}/>
            {/*<TextArea rows={28} value={result} onChange={(e) => setResult(e.target.value)}/>*/}
            <div dangerouslySetInnerHTML={{__html: html}}></div>
            {/*</div>*/}
            <Divider/>
            <Button onClick={tran}>Encode</Button>
        </>
    )
}

export default HandyJsonToGo;