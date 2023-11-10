import React, {useEffect, useState} from 'react';
import {
    closeHiloWebSocket,
    createHiloWebSocket,
    enterRoom,
    leaveRoom,
    roomHeartbeat
} from "@/components/HiloWebSocketTest";
import {Button} from "antd";
import HiloTrtc from "@/components/HiloTrtc";

const Test = () => {
    useEffect(() => {
        createHiloWebSocket("ws://127.0.0.1:8082/ws");
        return closeHiloWebSocket()
    }, []);


    return (
        <div>
            {/*冲！*/}
            {/*<Button onClick={enterRoom}>进房</Button>*/}
            {/*<Button onClick={leaveRoom}>离房</Button>*/}
            {/*<Button onClick={roomHeartbeat}>房跳</Button>*/}
            <HiloTrtc/>
        </div>
    )
};

export default Test;
