import React, {useEffect, useState} from 'react';
import '@/assets/js/wasm_exec'
import wasm from '@/assets/wasm/index.wasm'
import {Button} from "antd";

const Test = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSucess] = useState('');
    useEffect(()=>{
        const go = new window.Go();
        WebAssembly.instantiateStreaming(
            fetch(wasm),
            go.importObject
        ).then((result)=>{
            go.run(result.instance)
            setIsLoading(false)
            setSucess('success')
        })
    },[])
    if (isLoading) {
        return (
            <div>
                loading WebAssembly...
            </div>
        );
    } else {
        return (
            <div>
                Load {success}
                <Button onClick={()=>{
                    let test = window.wasmEncodeDecode('hello')
                    console.log(test)
                }}/>
            </div>
        );
    }
};

export default Test;
