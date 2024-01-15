import React, {useEffect, useState} from 'react';
import ChartLine from '@/components/Chart/ChartLine'
import ChartPie from '@/components/Chart/ChartPie'

const Test = () => {
    return (
        <div style={{float: "left", direction: "initial"}}>
            <ChartLine/>
            <ChartPie/>
        </div>
    );
};

export default Test;
