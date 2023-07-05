import {Avatar, Grid, Space} from "antd-mobile";
import {AntOutline, HistogramOutline} from 'antd-mobile-icons'

const Group = ({avatar, medals, name, notify, hit, maxStage}) => {
    return (<>
        <Grid columns={20} style={{margin: 8}}>
            <Grid.Item span={3}>
                <div>
                    <Avatar
                        src={avatar}/>
                </div>
            </Grid.Item>
            <Grid.Item span={14}>
                <div>
                    <Grid columns={1} gap={1}>
                        <Grid.Item>
                            <span style={{fontSize: 12}}>{name}</span>
                        </Grid.Item>
                        <Grid.Item>
                            <Space wrap style={{'--gap': '3px'}}>
                                {medals?.length > 0 && medals.map((item, index) => (
                                    <Avatar key={index} style={{width: 10, height: 10}}
                                            src={item.picUrl}/>
                                ))}
                            </Space>
                        </Grid.Item>
                        <Grid.Item>
                            <span style={{fontSize: 12}}>{notify}</span>
                        </Grid.Item>
                    </Grid>
                </div>
            </Grid.Item>
            <Grid.Item span={3}>
                <div>
                    <Grid columns={1}>
                        <Grid.Item>
                            <Space wrap style={{fontSize: 13, '--gap': '2px'}}>
                                {(typeof (maxStage) === 'number') && maxStage >= 0 &&
                                    <AntOutline color='#76c6b8'/>}
                                {(typeof (maxStage) === 'number') && maxStage >= 1 &&
                                    <AntOutline color='var(--adm-color-primary)'/>}
                                {(typeof (maxStage) === 'number') && maxStage >= 2 &&
                                    <AntOutline color='var(--adm-color-danger)'/>}
                            </Space>
                        </Grid.Item>
                        <Grid.Item>
                            <Space style={{fontSize: 10, '--gap': '2px'}}>
                                <HistogramOutline/>
                                <span>{hit}</span>
                            </Space>
                        </Grid.Item>
                    </Grid>
                </div>
            </Grid.Item>
        </Grid>
    </>)
}

export default Group