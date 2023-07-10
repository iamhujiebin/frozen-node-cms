import "./index.css"
import React, {useEffect, useState} from "react";
import {httpHilo} from "@/utils";

const Broadcast = ({broadcast}) => {
    const [idx, setIdx] = useState([0, 1, 2])
    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(prevIdx => {
                const lastTwoIdx = prevIdx.slice(1, 3)
                let lastIdx = prevIdx[prevIdx.length - 1] + 1
                if (lastIdx >= broadcast.length) {
                    lastIdx = 0
                }
                const newIdx = [...lastTwoIdx, lastIdx]
                return newIdx;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [broadcast]);
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Broadcast</p>
            <div className={'blueB'}>
                {idx.map((item, index) => (
                        <div key={index} style={{marginLeft: 30}}
                             className={index === 0 ? "scroll-text0" : index === 1 ? "scroll-text1" : "scroll-text2"}>
                            <div>
                                <img width={22} height={22} style={{borderRadius: 10, marginRight: 5}}
                                     src={broadcast[item]?.user?.avatar}/>
                                <span style={{color: "white"}}>{broadcast[item]?.msg.slice(0, 40)}</span>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Broadcast