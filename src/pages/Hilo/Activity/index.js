import {Grid} from "antd-mobile";
import {TeamOutline} from 'antd-mobile-icons'
import {useEffect, useState} from "react";
import {httpHilo} from "@/utils";

const Activities = ({}) => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        httpHilo.get("/v1/group/activity?type=0&pageSize=12&pageIndex=1&groupId=").then(r => {
            setActivities(r.data.data)
        })
    }, [])
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Activities</p>
            <div>
                {activities?.length > 0 && (
                    <Grid columns={2}>
                        {activities.map((item, index) => (
                            <Grid.Item key={index}>
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
                                                     src={item.banner}/>
                                                <div style={{
                                                    backgroundColor: "#a0a0a0",
                                                    position: 'absolute',
                                                    top: 6,
                                                    left: 6,
                                                    zIndex: 1,
                                                    color: "white",
                                                    border: "1px solid #ababab",
                                                    borderRadius: 10,
                                                    padding: 2
                                                }}> {item.theme}
                                                </div>
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: 6,
                                                    left: 6,
                                                    zIndex: 1,
                                                    color: "orange",
                                                    opacity: 0.8,
                                                    fontWeight: "bold"
                                                }}> {Date.now() > item.startAt ? "Activity Now" : "Today"}
                                                </div>
                                            </div>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <div>
                                                <img width={20} height={16}
                                                     src={item.countryIcon}/>
                                                <span>{item.theme}</span>
                                            </div>
                                        </Grid.Item>
                                        <Grid.Item>
                                            <TeamOutline color='#ae00ff'/>
                                            <span>{item.groupName.slice(0, 20)}</span>
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