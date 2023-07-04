import {createHiloWebSocket, closeHiloWebSocket} from "@/components/HiloWebSocket";
import {useEffect} from "react";

function Test() {
    useEffect(() => {
        createHiloWebSocket("ws://127.0.0.1:8082/ws")
        return () => {
            //卸载组件
            closeHiloWebSocket()
        }
    })
    return (
        <>
            hello
        </>
    )
}

export default Test