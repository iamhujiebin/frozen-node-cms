import {Avatar, Grid, Swiper} from "antd-mobile";
import "./index.css"

const Rank = ({avatars, avatars2, color, two}) => {
    if (two === 1) {
       return (
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
           </div>
       )
    }
    return (
        <div className='rank' style={{background: color}}>
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
        </div>
    )
}

export default Rank