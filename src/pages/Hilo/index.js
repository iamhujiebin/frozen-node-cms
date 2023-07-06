import {Swiper, Grid, Divider, Tabs} from 'antd-mobile';
import {RankBillboard, RankCp, RankFamily} from "@/pages/Hilo/Rank";
import Group from "@/pages/Hilo/Group";
import {useEffect, useState} from "react";
import {httpHilo} from "@/utils";

function Hilo() {
    const [banners, setBanners] = useState([])
    const [groups, setGroups] = useState([])
    const [news, setNews] = useState([])
    const [billboard, setBillboard] = useState({})
    const [family, setFamily] = useState({})
    const [cp, setCp] = useState([])
    const [tab, setTab] = useState('popular')
    useEffect(() => {
        httpHilo.get("/v1/imGroup/banner/list").then(r => {
            if (r.data?.length > 0) {
                setBanners(r.data)
            }
        })
    }, [])
    useEffect(() => {
        if (tab === 'popular') {
            httpHilo.get("/v1/imGroup/popular?pageIndex=1&pageSize=30").then(r => {
                if (r.data?.data.length > 0) {
                    setGroups(r.data.data)
                }
            })
        }
        if (tab === 'new') {
            httpHilo.get("/v1/imGroup/latest").then(r => {
                if (r.data?.length > 0) {
                    setNews(r.data)
                }
            })
        }
    }, [tab])
    useEffect(() => {
        httpHilo.get("/v1/billboard/top").then(r => {
            if (r.data) {
                setBillboard(r.data)
            }
        })
    }, [])
    useEffect(() => {
        httpHilo.get("/v1/groupPower/rankTop").then(r => {
            if (r.data) {
                setFamily(r.data)
            }
        })
    }, [])
    useEffect(() => {
        httpHilo.get("/v2/cp/top3").then(r => {
            let tmpCp = []
            if (r.data.day) {
                r.data.day.map(item => {
                    tmpCp.push([item.user1.avatar, item.user2.avatar])
                })
            }
            if (r.data.week) {
                r.data.week.map(item => {
                    tmpCp.push([item.user1.avatar, item.user2.avatar])
                })
            }
            setCp(tmpCp)
        })
    }, [])

    return (
        <div style={{margin: 5}}>
            <div title='自动播放'>
                <Swiper loop autoplay>
                    {banners.map((item, index) => (
                        <Swiper.Item key={index}>
                            <img style={{"width": "100%", height: 150}} src={item.bannerUrl}
                                 onClick={() => window.open(item.actionUrl)}/>
                        </Swiper.Item>
                    ))}
                </Swiper>
            </div>
            <Grid columns={3} gap={10} style={{marginTop: 5}}>
                <Grid.Item>
                    <RankFamily family={family}/>
                </Grid.Item>
                <Grid.Item>
                    <RankBillboard billboard={billboard}/>
                </Grid.Item>
                <Grid.Item>
                    <RankCp cp={cp}/>
                </Grid.Item>
            </Grid>
            <Divider style={{
                borderStyle: 'dashed',
            }}/>
            <Tabs defaultActiveKey='popular' onChange={(key) => setTab(key)}>
                <Tabs.Tab title='Popular' key='popular'>
                    {tab === 'popular' && groups.map((item, index) => <Group key={index} avatar={item.faceUrl}
                                                                             medals={[{"picUrl": item.countryIcon}, ...item.groupMedals]}
                                                                             name={item.name}
                                                                             notify={item.notification}
                                                                             hit={item.groupInUserDuration}
                                                                             maxStage={item.maxStage}/>)}
                </Tabs.Tab>
                <Tabs.Tab title='New' key='new'>
                    {tab === 'new' && news.map((item, index) => <Group key={index} avatar={item.faceUrl}
                                                                       medals={[{"picUrl": item.countryIcon}, ...item.groupMedals]}
                                                                       name={item.name}
                                                                       notify={item.notification}
                                                                       hit={item.groupInUserDuration}
                                                                       maxStage={item.maxStage}/>)}
                </Tabs.Tab>
            </Tabs>
        </div>)
}

export default Hilo