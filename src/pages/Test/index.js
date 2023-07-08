import React, {useState, useEffect} from 'react';
import "./index.css"

const allContent = [
    {name: '1', avatar: 'avatar1.jpg'},
    {name: '2', avatar: 'avatar2.jpg'},
    {name: '3', avatar: 'avatar3.jpg'},
    {name: '4', avatar: 'avatar3.jpg'},
    {name: '5', avatar: 'avatar3.jpg'},
    {name: '6', avatar: 'avatar3.jpg'},
    {name: '7', avatar: 'avatar3.jpg'},
    {name: '8', avatar: 'avatar3.jpg'},
    {name: '9', avatar: 'avatar3.jpg'},
]

const Test = () => {
    const [idx, setIdx] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(prevIdx => {
                const lastTwoIdx = prevIdx.slice(1, 3)
                let lastIdx = prevIdx[prevIdx.length - 1] + 1
                if (lastIdx >= allContent.length) {
                    lastIdx = 0
                }
                const newIdx = [...lastTwoIdx, lastIdx]
                return newIdx;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel">
            {idx.map((item, index) => (
                    <div key={index}>
                        <img src={allContent[item].avatar} alt={allContent[item].name}/>
                        <p>{allContent[item].name}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default Test;
