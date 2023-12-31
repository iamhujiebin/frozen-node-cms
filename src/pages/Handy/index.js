import '@/assets/js/wasm_exec'
import wasm from '@/assets/wasm/index.wasm'
import {useEffect} from "react";
import {Tabs} from 'antd';
import HandyURL from "@/pages/Handy/HandyURL";
import HandyBase64 from "@/pages/Handy/HandyBase64";
import HandyTimeConverter from "@/pages/Handy/HandyTimeConverter";
import HandyQRCode from "@/pages/Handy/HandyQRCode";
import HandyJsonToGo from "@/pages/Handy/HandyJsonToGo/HandyJsonToGo";
import HandySqlToGo from "@/pages/Handy/HandySqlToGo/HandySqlToGo";

const items = [
    {
        key: '1',
        label: 'URL Encode/Decode',
        children: <HandyURL/>,
    },
    {
        key: '2',
        label: 'Base64 Encode/Decode',
        children: <HandyBase64/>,
    },
    {
        key: '3',
        label: 'Unix Time Converter',
        children: <HandyTimeConverter/>,
    },
    {
        key: '4',
        label: 'Generate QR Code',
        children: <HandyQRCode/>
    },
    {
        key: '5',
        label: 'Json To Go',
        children: <HandyJsonToGo/>
    },
    {
        key: '6',
        label: 'Sql To Go',
        children: <HandySqlToGo/>
    }
];

function Handy() {
    useEffect(() => {
        const go = new window.Go();
        WebAssembly.instantiateStreaming(
            fetch(wasm),
            go.importObject
        ).then((result) => {
            go.run(result.instance)
            console.log("load go wasm success")
        })
    }, [])
    return (
        <div style={{margin: 30, padding: 20, borderRadius: 10, backgroundColor: "#d7d4d4"}}>
            <Tabs defaultActiveKey="1" items={items}/>
        </div>
    )
}

export default Handy