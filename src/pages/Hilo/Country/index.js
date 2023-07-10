import {Grid,} from "antd-mobile";
import {MoreOutline} from 'antd-mobile-icons'
import "./index.css"
import {useEffect, useState} from "react";
import {httpHilo} from "@/utils";

const Country = ({countries, userCountry, countryFlag, countryTop3}) => {
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Countries</p>
            {countries && countries.length > 0 && (
                <Grid columns={4}>
                    {countries.map((item, index) => (
                        <Grid.Item key={index}>
                            {item.icon?.length > 0 && (
                                <div style={{textAlign: "center"}}>
                                    <img src={item.icon} style={{width: 36, height: 24}}/>
                                    <p style={{marginTop: 2}}>{item.name}</p>
                                </div>
                            )}
                            {item.more && (
                                <div style={{textAlign: "center"}}>
                                    <MoreOutline style={{width: 36, height: 24}}/>
                                    <p style={{marginTop: 2}}>more</p>
                                </div>
                            )}
                        </Grid.Item>
                    ))}
                </Grid>
            )}
            <div className={'orangeBC'}>
                <Grid columns={10}>
                    <Grid.Item span={4}>
                        {/*<img height={60} style={{marginLeft: 20, marginRight: 10}}*/}
                        <img height={60} style={{margin: "5px 0px 20px 10px"}}
                             src={countryFlag}/>
                        <span style={{color: "white", fontWeight: "bold"}}>{userCountry}</span>
                    </Grid.Item>
                    <Grid.Item span={2}>
                        <img height={40} style={{margin: 10, borderRadius: "50%"}}
                             src={countryTop3[1]?.user?.avatar}/>
                    </Grid.Item>
                    <Grid.Item span={2}>
                        <img height={40} style={{margin: 10, borderRadius: "50%", marginTop: 5}}
                             src={countryTop3[0]?.user?.avatar}/>
                    </Grid.Item>
                    <Grid.Item span={2}>
                        <img height={40} style={{margin: 10, borderRadius: "50%"}}
                             src={countryTop3[2]?.user?.avatar}/>
                    </Grid.Item>
                </Grid>
            </div>
        </div>
    )
}

export default Country