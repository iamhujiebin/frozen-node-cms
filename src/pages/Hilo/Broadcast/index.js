import "./index.css"
import React, {useEffect, useState} from "react";

const broadcast = [
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item1111111111111111111111111111"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item222222222222222222222222222222"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item33333333333333333333333333333"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item444444444444444444444444444"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item555555555555555555555555555"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item66666666666666666666666666666"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item777777777777777777777777777"
    },
    {
        img: "https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg",
        text: "Item8888888888888888888888888888888"
    },
]


const Broadcast = ({}) => {
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
    }, []);
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Broadcast</p>
            <div className={'blueB'}>
                {idx.map((item, index) => (
                        <div key={index} style={{marginLeft: 30}}
                             className={index === 0 ? "scroll-text0" : index === 1 ? "scroll-text1" : "scroll-text2"}>
                            <div>
                                <img width={22} height={22} style={{borderRadius: 10, marginRight: 5}}
                                     src={broadcast[item].img}/>
                                <span>{broadcast[item].text}</span>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Broadcast