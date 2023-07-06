import {Swiper, Grid, Divider, Tabs, PullToRefresh, InfiniteScroll} from 'antd-mobile';
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
    const [hasMorePopular, setHasMorePopular] = useState(true)
    const [hasMoreNews, setHasMoreNews] = useState(true)
    const [pageIndexPopular, setPageIndexPopular] = useState(0)
    const [pageIndexNew, setPageIndexNew] = useState(0)
    const [lastIdNew, setLastIdNew] = useState(0)
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

    return (<div style={{margin: 5}}>
        <div title='自动播放' style={{height: 150, background: "grey"}}>
            {banners.length > 0 && (<Swiper loop autoplay>
                {banners.map((item, index) => (<Swiper.Item key={index}>
                    <img style={{"width": "100%", height: 150}} src={item.bannerUrl}
                         onClick={() => window.open(item.actionUrl)}/>
                </Swiper.Item>))}
            </Swiper>)}
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
        <Tabs defaultActiveKey='popular' onChange={(key) => onTabChange(key)}>
            <Tabs.Tab title='Popular' key='popular' forceRender>
                <PullToRefresh onRefresh={() => doRefreshPopular(1)}>
                    {tab === 'popular' && (groups.map((item, index) => <Group key={index} avatar={item.faceUrl}
                                                                              medals={[{"picUrl": item.countryIcon}, ...item.groupMedals]}
                                                                              name={item.name}
                                                                              notify={item.notification}
                                                                              hit={item.groupInUserDuration}
                                                                              maxStage={item.maxStage}/>))}
                    <InfiniteScroll loadMore={() => doRefreshPopular(pageIndexPopular)} hasMore={hasMorePopular}/>
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
    </div>)
}

export default Hilo