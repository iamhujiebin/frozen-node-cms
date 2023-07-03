import {Swiper, Grid, Space, Avatar} from 'antd-mobile';
import "./index.css"

const banners = [
    'https://image.whoisamy.shop/hilo/manager/c637ff988b6445d4b3af80b5ed1bd73d.png',
    'https://image.whoisamy.shop/hilo/manager/3936674e2d964a5eacbb96ad71333e3c.png',
    'https://image.whoisamy.shop/hilo/manager/28c5d41326b14902871dffeec17ee2ac.png',
    'https://image.whoisamy.shop/hilo/manager/ddcdbfb706d24fec84f56d2e4da06622.png',
    'https://image.whoisamy.shop/hilo/manager/586445ebe6074e1e9522774be2998b66.png',
]
const avatars = [
    'https://image.whoisamy.shop/hilo/avatar/7030c0a1bd5f45e3877d00fe8bdfebce-20230618-1687099328202.png',
    'https://image.whoisamy.shop/hilo/avatar/4fae25b2b3bf4b01abb502e469aa4eab-20230702-1688284080795.png',
    'https://image.whoisamy.shop/hilo/avatar/6628313eedbc43218808f3223f6267ac-20230622-1687416251599.png',
]

const avatars2 = [
    'https://image.whoisamy.shop/hilo/avatar/a8bce9f7d4164de18bfcddc65f9005fd-20230426-1682506884145.png',
    'https://image.whoisamy.shop/hilo/avatar/a8e5d94aa866434db93e4b5a409df9bb-2022-08-29-1661802745309.png',
    'https://image.whoisamy.shop/hilo/avatar/94592a6cbcb042f9b79769c27e751aee-20230625-1687699276788.png'
]
const avatars3 = [
    'https://image.whoisamy.shop/hilo/avatar/6f2e9f4f470c4faabb0b316d26eeb73e-20230606-1686077377312.png',
    'https://image.whoisamy.shop/hilo/avatar/9368ef0eb7d9494aae9ff8bace1323ef-20230213-1676311337161.png',
    'https://image.whoisamy.shop/hilo/avatar/b3eceb3eeadf4e3ca2f92e8cd27a7f39-20230624-1687612224017.gif',
]

const avatars4 = [
    'https://image.whoisamy.shop/hilo/avatar/456b2f0d84cb4eeabee56e4c43968f56-20230620-1687214461911.png',
    'https://image.whoisamy.shop/hilo/avatar/98a790e4768c448b89bc94002b37ff79-20230205-1675556401418.png',
    'https://image.whoisamy.shop/hilo/avatar/ed90e771a3134450981b0f15466964cf-20230702-1688295499394.png'
]
const avatars5 = [
    'https://image.whoisamy.shop/hilo/avatar/d17f23f6898a448a8aec414111c17cb0-20230603-1685751541426.png',
    'https://image.whoisamy.shop/hilo/avatar/bdac4f89c5bf4cce84ab69ac3b63fb4d-20230106-1672979977709.png'
]
const avatars6 = [
    'https://image.whoisamy.shop/hilo/avatar/d509983bc48844ea9ca8100b3b6449d4-20230703-1688394385047.png',
    '\thttps://image.whoisamy.shop/hilo/avatar/3af7d9c821a44bbd92c598be54440b74-20230518-1684451257709.png'
]

function Hilo() {

    return (
        <>
            <div title='自动播放'>
                <Swiper loop autoplay>
                    {banners.map((item, index) => (
                        <Swiper.Item key={index}>
                            <img style={{"width": "100%", height: "auto"}} src={item}/>
                        </Swiper.Item>
                    ))}
                </Swiper>
            </div>
            <Space/>
            <Grid columns={3} gap={10} style={{margin: 5}}>
                <Grid.Item>
                    <div className='rank' style={{background: "green"}}>
                        <Grid columns={1} gap={3} style={{marginLeft: 'auto', marginRight: "auto", width: '80%'}}>
                            <Grid.Item className='rankP'>
                                Family
                            </Grid.Item>
                            <Grid.Item>
                                <Swiper loop autoplay
                                        indicator={(total, cur) => {
                                        }}
                                        allowTouchMove={false}
                                        direction='vertical'
                                        style={{height: 30, marginLeft: 5}}
                                >
                                    <Swiper.Item>
                                        <Grid columns={3}>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars[0]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars[1]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars[2]}/>
                                            </Grid.Item>
                                        </Grid>
                                    </Swiper.Item>
                                    <Swiper.Item>
                                        <Grid columns={3}>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars2[0]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars2[1]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars2[2]}/>
                                            </Grid.Item>
                                        </Grid>
                                    </Swiper.Item>
                                </Swiper>
                            </Grid.Item>
                        </Grid>
                    </div>
                </Grid.Item>
                <Grid.Item>
                    <div className='rank' style={{background: "orange"}}>
                        <Grid columns={1} gap={3} style={{marginLeft: 'auto', marginRight: "auto", width: '80%'}}>
                            <Grid.Item className='rankP'>
                                Family
                            </Grid.Item>
                            <Grid.Item>
                                <Swiper loop autoplay
                                        indicator={(total, cur) => {
                                        }}
                                        allowTouchMove={false}
                                        direction='vertical'
                                        style={{height: 30, marginLeft: 5}}
                                >
                                    <Swiper.Item>
                                        <Grid columns={3}>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars3[0]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars3[1]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars3[2]}/>
                                            </Grid.Item>
                                        </Grid>
                                    </Swiper.Item>
                                    <Swiper.Item>
                                        <Grid columns={3}>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars4[0]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars4[1]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars4[2]}/>
                                            </Grid.Item>
                                        </Grid>
                                    </Swiper.Item>
                                </Swiper>
                            </Grid.Item>
                        </Grid>
                    </div>
                </Grid.Item>
                <Grid.Item>
                    <div className='rank' style={{background: "purple"}}>
                        <Grid columns={1} gap={1} style={{marginLeft: 'auto', marginRight: "auto", width: '50%'}}>
                            <Grid.Item className='rankP'>
                                Family
                            </Grid.Item>
                            <Grid.Item>
                                <Swiper loop autoplay
                                        indicator={(total, cur) => {
                                        }}
                                        allowTouchMove={false}
                                        direction='vertical'
                                        style={{height: 30, marginLeft: 5}}
                                >
                                    <Swiper.Item>
                                        <Grid columns={2}>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars5[0]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars5[1]}/>
                                            </Grid.Item>
                                        </Grid>
                                    </Swiper.Item>
                                    <Swiper.Item>
                                        <Grid columns={2}>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars6[0]}/>
                                            </Grid.Item>
                                            <Grid.Item>
                                                <Avatar className='avatar' src={avatars6[1]}/>
                                            </Grid.Item>
                                        </Grid>
                                    </Swiper.Item>
                                </Swiper>
                            </Grid.Item>
                        </Grid>
                    </div>
                </Grid.Item>
            </Grid>
        </>)
}

export default Hilo