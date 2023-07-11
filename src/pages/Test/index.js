import React, {useState, useEffect} from 'react';
import "./index.css"
import {createHiloWebSocket, closeHiloWebSocket} from "@/components/HiloWebSocket";

const Test = () => {

    useEffect(() => {
        // createHiloWebSocket("ws://127.0.0.1:8082/ws");
        createHiloWebSocket("wss://test.ws.faceline.live/ws");
        return closeHiloWebSocket()
    }, []);

    return (
        <>
            测试hilo websocket
        </>
    );
};

export default Test;
