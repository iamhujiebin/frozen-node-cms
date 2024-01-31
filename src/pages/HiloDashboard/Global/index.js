import React from 'react';
import DayCharge from "@/pages/HiloDashboard/Global/DayCharge";
import Dau from "@/pages/HiloDashboard/Global/Dau";
import GlobalUserMove from "@/pages/HiloDashboard/Global/GlobalUserMove";
import HotWord from "@/pages/HiloDashboard/Global/HotWord";

const Global = () => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", gap: '28px'}}>
            <DayCharge/>
            <Dau/>
            <GlobalUserMove/>
            <HotWord/>
        </div>
    );
};

export default Global
