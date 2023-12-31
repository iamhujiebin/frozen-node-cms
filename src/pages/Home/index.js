import Bar from "@/components/Bar"
import "@/index.scss"

const Home = () => {
    return (
        <div className="home">
            <Bar
                style={{width: '500px', height: '400px'}}
                xData={['vue', 'angular', 'react']}
                sData={[50, 40, 90]}
                title='三大框架满意度'
            />
        </div>
    )
}

export default Home