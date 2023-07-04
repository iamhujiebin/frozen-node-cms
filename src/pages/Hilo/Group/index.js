import {Avatar, Grid, Space} from "antd-mobile";
import {AntOutline, HistogramOutline} from 'antd-mobile-icons'

const Group = () => {
    return (<>
        <Grid columns={8} style={{margin: 10}}>
            <Grid.Item span={1}>
                <div style={{borderRadius: 2}}>
                    <Avatar
                        src={"https://image.whoisamy.shop/hilo/group/35dd75ecce0b414c967a823072b2cc18-20230623-1687522314171.png"}/>
                </div>
            </Grid.Item>
            <Grid.Item span={6}>
                <div style={{height: 44}}>
                    <Grid columns={1} gap={2}>
                        <Grid.Item>
                            <span style={{fontSize: 12}}>🏡⃟ കേരള ഹൗസ് ⃞🏝️</span>
                        </Grid.Item>
                        <Grid.Item>
                            <Avatar style={{width: 10, height: 10}}
                                    src={"https://oss.iludo.live/image/33d63a5f2d854519b981b0dc313d4ab8.png"}/>
                        </Grid.Item>
                        <Grid.Item>
                            ഉപദേശം ആകാം ഊഞ്ഞാല
                        </Grid.Item>
                    </Grid>
                </div>
            </Grid.Item>
            <Grid.Item span={1}>
                <div>
                    <Grid columns={1}>
                        <Grid.Item>
                            <Space wrap style={{fontSize: 13, '--gap': '2px'}}>
                                <AntOutline color='#76c6b8'/>
                                <AntOutline color='var(--adm-color-primary)'/>
                                <AntOutline color='var(--adm-color-danger)'/>
                            </Space>
                        </Grid.Item>
                        <Grid.Item>
                            <Space style={{fontSize: 10, '--gap': '2px'}}>
                                <HistogramOutline/>
                                <span>3027</span>
                            </Space>
                        </Grid.Item>
                    </Grid>
                </div>
            </Grid.Item>
        </Grid>
    </>)
}

export default Group