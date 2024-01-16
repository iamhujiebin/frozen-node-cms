import ChartLine from '@/components/Chart/ChartLine'
import ChartPie from '@/components/Chart/ChartPie'
import ChartColumn from '@/components/Chart/ChartColumn'
import ChartSankey from '@/components/Chart/ChartSankey'
import ChartRadar from '@/components/Chart/ChartRadar'
import ChartFunnel from '@/components/Chart/ChartFunnel'
import ChartWordCloud from '@/components/Chart/ChartWordCloud'
import ChartBar from '@/components/Chart/ChartBar'
import ChartWaterfall from '@/components/Chart/ChartWaterfall'

const Test = () => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", gap: '28px'}}>
            <ChartLine/>
            <ChartPie/>
            <ChartColumn/>
            <ChartSankey/>
            <ChartRadar/>
            <ChartFunnel/>
            <ChartWordCloud/>
            <ChartBar/>
            <ChartWaterfall/>
        </div>
    );
};

export default Test;
