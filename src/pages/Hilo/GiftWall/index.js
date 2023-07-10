import {Avatar, Grid, Swiper,} from "antd-mobile";
import "./index.css"
import {useEffect, useState} from "react";
import {httpHilo} from "@/utils";

const GiftWall = ({giftWalls}) => {
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
                                                <Avatar style={{width: 40, height: 40, borderRadius: "50%"}}
                                                        src={item.sendUser.avatar}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Grid columns={2}>
                                                    <Grid.Item>
                                                        <Avatar style={{width: 40, height: 40}} src={item.giftUrl}/>
                                                    </Grid.Item>
                                                    <Grid.Item>
                                                        <p style={{
                                                            color: "gold",
                                                            fontWeight: "bold",
                                                            marginTop: 15,
                                                            marginLeft: 5
                                                        }}>x1</p>
                                                    </Grid.Item>
                                                </Grid>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar style={{width: 40, height: 40, borderRadius: "50%"}}
                                                        src={item.receiveUser.avatar}/>
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