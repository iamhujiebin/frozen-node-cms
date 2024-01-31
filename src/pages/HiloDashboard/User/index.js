import React, {useState} from 'react';
import {Input} from "antd";
import UserEvent from "@/pages/HiloDashboard/User/UserEvent";
import UserInOut from "@/pages/HiloDashboard/User/UserInOut";

const {Search} = Input

const User = () => {
    const [code, setCode] = useState('')
    const onSearch = e => {
        setCode(e)
    }
    return (
        <>
            <Search placeholder="user code" onSearch={onSearch} enterButton style={{
                width: 388,
            }}/>
            <div style={{display: "flex", flexWrap: "wrap", gap: '28px'}}>
                <UserEvent code={code}/>
                <UserInOut code={code}/>
            </div>
        </>
    );
};

export default User
