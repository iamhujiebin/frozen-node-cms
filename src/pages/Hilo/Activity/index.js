import {Grid} from "antd-mobile";
import {TeamOutline} from 'antd-mobile-icons'

const activities = [
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


const Activities = ({}) => {
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Activities</p>
            <div>
                {activities?.length > 0 && (
                    <Grid columns={2}>
                        {activities.map((item, index) => (
                            <Grid.Item>
                                <div style={{
                                    border: "1px solid #ababab",
                                    borderRadius: 10,
                                    marginRight: 5,
                                    marginBottom: 5
                                }}>
                                    <Grid columns={1} gap={2}>
                                        <Grid.Item>
                                            <div style={{position: 'relative'}}>
                                                <img height={100} width={"100%"} style={{borderRadius: "10px 10px 0 0"}}
                                                     src={"https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg"}/>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: 6,
                                                    left: 6,
                                                    zIndex: 1,
                                                    color: "white",
                                                    border: "1px solid #ababab",
                                                    borderRadius: 10,
                                                    padding: 2
                                                }}> hello world
                                                </div>
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: 6,
                                                    left: 6,
                                                    zIndex: 1,
                                                    color: "orange",
                                                }}> Activity Now
                                                </div>
                                            </div>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <div>
                                                <img width={20} height={16}
                                                     src={"https://image.whoisamy.shop/hilo/manager/74ee6581a7c14a0cb0c7ff973f9ee973.jpeg"}/>
                                                <span>Cip pirte</span>
                                            </div>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <TeamOutline color='#ae00ff'/>
                                            <span>B.D Adda Zone</span>
                                        </Grid.Item>
                                    </Grid>
                                </div>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </div>
        </div>
    )
}

export default Activities