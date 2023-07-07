import {Avatar, Grid, Swiper} from "antd-mobile";
import "./index.css"

const Rank = ({avatars, avatars2, color, two}) => {
    if (two === 1) {
        return (<div className='rank' style={{background: "purple"}}>
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
                                    <Avatar className='avatarR' src={avatars[0]}/>
                                </Grid.Item>
                                <Grid.Item>
                                    <Avatar className='avatarR' src={avatars[1]}/>
                                </Grid.Item>
                            </Grid>
                        </Swiper.Item>
                        <Swiper.Item>
                            <Grid columns={2}>
                                <Grid.Item>
                                    <Avatar className='avatarR' src={avatars2[0]}/>
                                </Grid.Item>
                                <Grid.Item>
                                    <Avatar className='avatarR' src={avatars2[1]}/>
                                </Grid.Item>
                            </Grid>
                        </Swiper.Item>
                    </Swiper>
                </Grid.Item>
            </Grid>
        </div>)
    }
    return (<div className='rank' style={{background: color}}>
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
                                <Avatar className='avatarR' src={avatars[0]}/>
                            </Grid.Item>
                            <Grid.Item>
                                <Avatar className='avatarR' src={avatars[1]}/>
                            </Grid.Item>
                            <Grid.Item>
                                <Avatar className='avatarR' src={avatars[2]}/>
                            </Grid.Item>
                        </Grid>
                    </Swiper.Item>
                    <Swiper.Item>
                        <Grid columns={3}>
                            <Grid.Item>
                                <Avatar className='avatarR' src={avatars2[0]}/>
                            </Grid.Item>
                            <Grid.Item>
                                <Avatar className='avatarR' src={avatars2[1]}/>
                            </Grid.Item>
                            <Grid.Item>
                                <Avatar className='avatarR' src={avatars2[2]}/>
                            </Grid.Item>
                        </Grid>
                    </Swiper.Item>
                </Swiper>
            </Grid.Item>
        </Grid>
    </div>)
}

const RankBillboard = ({billboard}) => {
    return (<div className='orangeB'>
        <Grid columns={1} gap={3} style={{marginLeft: 'auto', marginRight: "auto", width: '80%'}}>
            <Grid.Item className='rankP'>
                Rank
            </Grid.Item>
            <Grid.Item>
                {(billboard.celebrity || billboard.charm || billboard.group) && (
                    <Swiper loop autoplay
                            indicator={(total, cur) => {
                            }}
                            allowTouchMove={false}
                            direction='vertical'
                            style={{height: 30, marginLeft: 5}}
                    >
                        {billboard.celebrity && (
                            <Swiper.Item>
                                <Grid columns={3}>
                                    {billboard.celebrity.map((item, index) => (
                                        <Grid.Item key={index}>
                                            <Avatar className='avatarR' src={item.avatar}/>
                                        </Grid.Item>
                                    ))}
                                </Grid>
                            </Swiper.Item>
                        )}
                        {billboard.charm && (
                            <Swiper.Item>
                                <Grid columns={3}>
                                    {billboard.charm.map((item, index) => (
                                        <Grid.Item key={index}>
                                            <Avatar className='avatarR' src={item.avatar}/>
                                        </Grid.Item>
                                    ))}
                                </Grid>
                            </Swiper.Item>
                        )}
                        {billboard.group && (
                            <Swiper.Item>
                                <Grid columns={3}>
                                    {billboard.group.map((item, index) => (
                                        <Grid.Item key={index}>
                                            <Avatar className='avatarR' src={item.avatar}/>
                                        </Grid.Item>
                                    ))}
                                </Grid>
                            </Swiper.Item>
                        )}
                    </Swiper>)}
            </Grid.Item>
        </Grid>
    </div>)
}

const RankFamily = ({family}) => {
    return (<div className='greenB'>
        <Grid columns={1} gap={3} style={{marginLeft: 'auto', marginRight: "auto", width: '80%'}}>
            <Grid.Item className='rankP'>
                Family
            </Grid.Item>
            <Grid.Item>
                {(family.day || family.week || family.month) && (
                    <Swiper loop autoplay
                            indicator={(total, cur) => {
                            }}
                            allowTouchMove={false}
                            direction='vertical'
                            style={{height: 30, marginLeft: 5}}
                    >
                        {family.day && (
                            <Swiper.Item>
                                <Grid columns={3}>
                                    {family.day.map((item, index) => (
                                        <Grid.Item key={index}>
                                            <Avatar className='avatarR' src={item.icon}/>
                                        </Grid.Item>
                                    ))}
                                </Grid>
                            </Swiper.Item>
                        )}
                        {family.week && (
                            <Swiper.Item>
                                <Grid columns={3}>
                                    {family.week.map((item, index) => (
                                        <Grid.Item key={index}>
                                            <Avatar className='avatarR' src={item.icon}/>
                                        </Grid.Item>
                                    ))}
                                </Grid>
                            </Swiper.Item>
                        )}
                        {family.month && (
                            <Swiper.Item>
                                <Grid columns={3}>
                                    {family.month.map((item, index) => (
                                        <Grid.Item key={index}>
                                            <Avatar className='avatarR' src={item.icon}/>
                                        </Grid.Item>
                                    ))}
                                </Grid>
                            </Swiper.Item>
                        )}
                    </Swiper>)}
            </Grid.Item>
        </Grid>
    </div>)
}

const RankCp = ({cp}) => {
    return (<div className='purpleB'>
        <Grid columns={1} gap={1} style={{marginLeft: 'auto', marginRight: "auto", width: '50%'}}>
            <Grid.Item className='rankP'>
                CP
            </Grid.Item>
            <Grid.Item>
                {cp.length > 0 && (
                    <Swiper loop autoplay
                            indicator={(total, cur) => {
                            }}
                            allowTouchMove={false}
                            direction='vertical'
                            style={{height: 30, marginLeft: 5}}
                    >
                        {cp.map((item, index) => (
                            <Swiper.Item key={index}>
                                <Grid columns={2}>
                                    <Grid.Item>
                                        <Avatar className='avatarR' src={item[0]}/>
                                    </Grid.Item>
                                    <Grid.Item>
                                        <Avatar className='avatarR' src={item[1]}/>
                                    </Grid.Item>
                                </Grid>
                            </Swiper.Item>
                        ))}
                    </Swiper>)}
            </Grid.Item>
        </Grid>
    </div>)
}


export {Rank, RankBillboard, RankFamily, RankCp}