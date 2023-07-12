import {Grid, Divider, Tabs, PullToRefresh, InfiniteScroll, Avatar, Button} from 'antd-mobile';
import {RankBillboard, RankCp, RankFamily} from "@/pages/Hilo/Rank";
import Group from "@/pages/Hilo/Group";
import {useEffect, useState} from "react";
import {httpHilo} from "@/utils";
import Header from "@/pages/Hilo/Header";
import Banner from "@/pages/Hilo/Banner";
import Country from "@/pages/Hilo/Country";
import GiftWall from "@/pages/Hilo/GiftWall";
import Broadcast from "@/pages/Hilo/Broadcast";
import Activities from "@/pages/Hilo/Activity";
import Event from "@/pages/Hilo/Event";
import {closeHiloWebSocket, createHiloWebSocket} from "@/components/HiloWebSocket";
import {PubSub} from "pubsub-js";
import FloatingImage from "@/components/FloatingImage";

function Hilo() {
    const [banners, setBanners] = useState([])
    const [groups, setGroups] = useState([])
    const [news, setNews] = useState([])
    const [billboard, setBillboard] = useState({})
    const [family, setFamily] = useState({})
    const [cp, setCp] = useState([])
    const [tab, setTab] = useState('popular')
    const [hasMorePopular, setHasMorePopular] = useState(true)
    const [hasMoreNews, setHasMoreNews] = useState(true)
    const [pageIndexPopular, setPageIndexPopular] = useState(0)
    const [pageIndexNew, setPageIndexNew] = useState(0)
    const [lastIdNew, setLastIdNew] = useState(0)
    const [page, setPage] = useState('popular') // popular | discover

    const [show, setShow] = useState(false)
    const [gift, setGift] = useState(null)
    // 礼物banner
    useEffect(() => {
        createHiloWebSocket("wss://test.ws.faceline.live/ws");
        return closeHiloWebSocket()
    }, []);

    let messageSocket = null
    useEffect(() => {
        // console.log("listening to message")
        //订阅 'message' 发布的发布的消息
        if (!messageSocket) {
            messageSocket = PubSub.subscribe('gift_send', function (topic, message) {
                //message 为接收到的消息
                // 重新加载消息列表
                console.log("recieve gift send:", topic, message)
                setGift(message)
                // setImg(message.getGiftpicurl())
                setShow(true)
            })
        }
        //卸载组件 取消订阅
        return () => {
            PubSub.unsubscribe(messageSocket);
        }
    })
    useEffect(() => {
        httpHilo.get("/v1/imGroup/banner/list").then(r => {
            if (r.data?.length > 0) {
                setBanners(r.data)
            }
        })
    }, [])
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
    useEffect(() => {
        console.log(page)
        if (page === 'discover') {
            doDiscover()
        }
    }, [page])
    const onTabChange = (value) => {
        setTab(value)
    }

    // 需要定义async异步函数,InfiniteScroll才能触发异步的"加载中"状态
    async function doRefreshNew(pageIndex) {
        console.log("load more new!!")
        let lastId = lastIdNew
        if (pageIndex === 0 || pageIndex === 1) {
            lastId = 0
            pageIndex = 1
        }
        const r = await httpHilo.get(`/v1/imGroup/latest?pageIndex=${pageIndex}&pageSize=30&lastId=${lastId}`)
        if (r.data?.length > 0) {
            if (pageIndex === 1) {
                setNews(r.data)
            } else {
                setNews([...news, ...r.data])
            }
            setPageIndexNew(pageIndex + 1)
            setHasMoreNews(true)
            console.log("lastId:", r.data[r.data.length - 1].id)
            setLastIdNew(r.data[r.data.length - 1].id)
        } else {
            setHasMoreNews(false)
        }
    }

    async function doRefreshPopular(pageIndex) {
        console.log("load more popular!!")
        if (pageIndex === 0) {
            pageIndex = 1
        }
        const r = await httpHilo.get(`/v1/imGroup/popular?pageIndex=${pageIndex}&pageSize=30`)
        if (r.data?.data.length > 0) {
            if (pageIndex === 1) {
                setGroups(r.data.data)
            } else {
                setGroups([...groups, ...r.data.data])
            }
            setPageIndexPopular(pageIndex + 1)
            setHasMorePopular(true)
        } else {
            setHasMorePopular(false)
        }
    }

    // discover相关
    const [discoverLoad, setDiscoverLoad] = useState(false)
    const [countries, setCountries] = useState([])
    const [userCountry, setUserCountry] = useState('')
    const [countryFlag, setCountryFlag] = useState('')
    const [countryTop3, setCountryTop3] = useState([])
    const [giftWalls, setGiftWalls] = useState([])
    const [broadcast, setBroadcast] = useState([])
    const [activities, setActivities] = useState([])
    const [events, setEvents] = useState([])

    const doDiscover = (() => {
        if (discoverLoad) {
            return
        }
        setDiscoverLoad(true)
        // 国家列表
        httpHilo.get("/v1/imGroup/country/prior").then(r => {
            setCountries([...r.data, {more: 1}])
        })
        // 国家top3
        httpHilo.get("/v1/user/detail").then(r => {
            setUserCountry(r.data.country)
            httpHilo.get(`/v1/user/country/top?country=${r.data.country}`).then(r => {
                if (r.data.countryIcon?.length > 0) {
                    setCountryFlag(r.data.countryIcon)
                }
                setCountryTop3(r.data.userDiamond)
            })
        })
        // 礼物墙
        httpHilo.get("/v1/gift/wall?pageIndex=1&pageSize=3").then(r => {
            setGiftWalls(r.data)
        })
        // 广播
        httpHilo.get("/v1/user/global/broadcast?pageIndex=0&pageSize=50").then(r => {
            setBroadcast(r.data)
        })
        // 活动
        httpHilo.get("/v1/group/activity?type=0&pageSize=12&pageIndex=1&groupId=").then(r => {
            setActivities(r.data.data)
        })
        // 事件
        httpHilo.get("/v1/discovery/banner/list?pageIndex=1&pageSize=10").then(r => {
            setEvents(r.data)
        })
    })
    return (<>
        {/*礼物横幅*/}
        {show && <FloatingImage setShow={setShow}
                                gift={gift}/>}
        {/*头部搜索*/}
        <Header page={page} setPage={setPage}/>
        {page === 'popular' && (<div style={{margin: 5, marginTop: -40}}>
            {/*banners*/}
            <Banner banners={banners}/>
            {/*三个排行*/}
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
            {/*群组列表*/}
            <Tabs style={{marginTop: -20}} defaultActiveKey='popular' onChange={(key) => onTabChange(key)}>
                <Tabs.Tab title='Popular' key='popular'>
                    <PullToRefresh onRefresh={() => doRefreshPopular(1)}>
                        {tab === 'popular' && (groups.map((item, index) => <Group key={index}
                                                                                  avatar={item.faceUrl}
                                                                                  medals={[{"picUrl": item.countryIcon}, ...item.groupMedals]}
                                                                                  name={item.name}
                                                                                  notify={item.notification}
                                                                                  hit={item.groupInUserDuration}
                                                                                  maxStage={item.maxStage}/>))}
                        <InfiniteScroll loadMore={() => doRefreshPopular(pageIndexPopular)}
                                        hasMore={hasMorePopular}/>
                    </PullToRefresh>
                </Tabs.Tab>
                <Tabs.Tab title='New' key='new'>
                    <PullToRefresh onRefresh={() => doRefreshNew(1)}>
                        {tab === 'new' && news.map((item, index) => <Group key={index} avatar={item.faceUrl}
                                                                           medals={[{"picUrl": item.countryIcon}, ...item.groupMedals]}
                                                                           name={item.name}
                                                                           notify={item.notification}
                                                                           hit={item.groupInUserDuration}
                                                                           maxStage={item.maxStage}/>)}
                        <InfiniteScroll loadMore={() => doRefreshNew(pageIndexNew)} hasMore={hasMoreNews}/>
                    </PullToRefresh>
                </Tabs.Tab>
            </Tabs>
        </div>)}
        {page === 'discover' && (<>
            <Country countries={countries} userCountry={userCountry} countryFlag={countryFlag}
                     countryTop3={countryTop3}/>
            <GiftWall giftWalls={giftWalls}/>
            <Broadcast broadcast={broadcast}/>
            <Activities activities={activities}/>
            <Event events={events}/>
        </>)}
    </>)
}

export default Hilo