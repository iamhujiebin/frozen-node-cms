import {Grid,} from "antd-mobile";
import {MoreOutline} from 'antd-mobile-icons'
import "./index.css"

const countries = [
    {
        country: "Nepal",
        url: "https://image.whoisamy.shop/hilo/resource/country/Nepal.png"
    },
    {
        country: "Nepal",
        url: "https://image.whoisamy.shop/hilo/resource/country/Nepal.png"
    },
    {
        country: "Nepal",
        url: "https://image.whoisamy.shop/hilo/resource/country/Nepal.png"
    },
    {
        country: "Nepal",
        url: "https://image.whoisamy.shop/hilo/resource/country/Nepal.png"
    },
    {
        country: "Nepal",
        url: "https://image.whoisamy.shop/hilo/resource/country/Nepal.png"
    },
    {
        country: "Nepal",
        url: "https://image.whoisamy.shop/hilo/resource/country/Nepal.png"
    },
    {
        country: "Nepal",
        url: "https://image.whoisamy.shop/hilo/resource/country/Nepal.png"
    },
    {
        more: true,
    },
]
const Country = ({}) => {
    return (
        <div style={{margin: 10}}>
            <p style={{fontWeight: 500}}>Countries</p>
            {countries && countries.length > 0 && (
                <Grid columns={4}>
                    {countries.map((item, index) => (
                        <Grid.Item>
                            {item.country?.length > 0 && (
                                <div style={{textAlign: "center"}}>
                                    <img src={item.url} style={{width: 36, height: 24}}/>
                                    <p style={{marginTop: 2}}>{item.country}</p>
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
            {/*<div style={{backgroundColor: "orange", width: "auto", height: 60, borderRadius: 8}}>*/}
            <div className={'orangeBC'}>
                <Grid columns={10}>
                    <Grid.Item span={4}>
                        <img height={60} style={{marginLeft: 20, marginRight: 10}}
                             src={"https://image.whoisamy.shop/hilo/group/7b24f6f30acf4196b25d435448319271-20230529-1685332200115.png"}/>
                        <span>India</span>
                    </Grid.Item>
                    <Grid.Item span={2}>
                        <img height={40} style={{margin: 10}}
                             src={"https://image.whoisamy.shop/hilo/avatar/b323d09db2eb461e926715aa42da1a21-20230615-1686815443408.png"}/>
                    </Grid.Item>
                    <Grid.Item span={2}>
                        <img height={40} style={{margin: 10}}
                             src={"https://image.whoisamy.shop/hilo/avatar/b323d09db2eb461e926715aa42da1a21-20230615-1686815443408.png"}/>
                    </Grid.Item>
                    <Grid.Item span={2}>
                        <img height={40} style={{margin: 10}}
                             src={"https://image.whoisamy.shop/hilo/avatar/b323d09db2eb461e926715aa42da1a21-20230615-1686815443408.png"}/>
                    </Grid.Item>
                </Grid>
            </div>
        </div>
    )
}

export default Country