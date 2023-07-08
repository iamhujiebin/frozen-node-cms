import {Avatar, Grid, Swiper,} from "antd-mobile";
import "./index.css"

const giftWalls = [
    ["https://image.whoisamy.shop/hilo/group/7b24f6f30acf4196b25d435448319271-20230529-1685332200115.png", "https://image.whoisamy.shop/hilo/resource/country/Nepal.png", "https://image.whoisamy.shop/hilo/group/7b24f6f30acf4196b25d435448319271-20230529-1685332200115.png"],
    ["https://image.whoisamy.shop/hilo/group/7b24f6f30acf4196b25d435448319271-20230529-1685332200115.png", "https://image.whoisamy.shop/hilo/resource/country/Nepal.png", "https://image.whoisamy.shop/hilo/group/7b24f6f30acf4196b25d435448319271-20230529-1685332200115.png"],
    // ["https://image.whoisamy.shop/hilo/group/7b24f6f30acf4196b25d435448319271-20230529-1685332200115.png", "https://image.whoisamy.shop/hilo/resource/country/Nepal.png", "https://image.whoisamy.shop/hilo/group/7b24f6f30acf4196b25d435448319271-20230529-1685332200115.png"],
]
const GiftWall = ({}) => {
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Gift Wall</p>
            <div className={'purpleBC'}>
                {giftWalls.length > 0 && (
                    <Grid columns={10}>
                        <Grid.Item span={4}>
                            <p style={{
                                fontWeight: 500,
                                color: "white",
                                textAlign: "center",
                                margin: "25px 25px 25px -25px"
                            }}>Gift Wall</p>
                        </Grid.Item>
                        <Grid.Item span={6}>
                            <Swiper loop autoplay
                                    indicator={() => null}
                                    allowTouchMove={false}
                                    direction='vertical'
                                    style={{height: 60, margin: 11}}
                            >
                                {giftWalls.map((item, index) => (
                                    <Swiper.Item key={index}>
                                        <Grid columns={3}>
                                            <Grid.Item>
                                                <Avatar style={{width: 40, height: 40}} src={item[0]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar style={{width: 40, height: 40}} src={item[1]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar style={{width: 40, height: 40}} src={item[2]}/>
                                            </Grid.Item>
                                        </Grid>
                                    </Swiper.Item>)
                                )}
                            </Swiper>
                        </Grid.Item>
                    </Grid>
                )}
            </div>
        </div>
    )
}

export default GiftWall