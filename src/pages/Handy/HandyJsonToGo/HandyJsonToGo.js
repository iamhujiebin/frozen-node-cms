import React, {useState} from 'react';
import {Button, Checkbox, Divider, Input} from 'antd';
import {jsonToGo} from "@/assets/js/json-to-go";
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['inline', 'example', 'omitempty'];
const defaultCheckedList = ['inline', 'omitempty'];

function HandyJsonToGo() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const tran = e=> {
        let inline = true
        let example = false
        let omitempty = false
        checkedList.map(item => {
            if (item === 'inline') {
                inline = false
            }
            if (item === 'example') {
                example= true
            }
            if (item === 'omitempty') {
                omitempty= true
            }
        })
        const res = jsonToGo(value, 'AutoGenerate', inline, example, omitempty)
        setResult(res.go)
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
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <TextArea rows={30} value={value} onChange={(e) => setValue(e.target.value)}/>
                <TextArea rows={30} value={result} onChange={(e) => setResult(e.target.value)}/>
            </div>
            <Button onClick={tran}>Encode</Button>
        </>
    )
}
export default HandyJsonToGo;