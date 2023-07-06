import {Avatar, Button, Grid} from "antd-mobile";
import {SearchOutline} from "antd-mobile-icons";

const Header = ({page, setPage}) => {
    return (
        <div style={{padding: 10, height: 94, backgroundColor: "purple", borderRadius: "0 0 30% 30%"}}>
            <Grid columns={12} gap={10}>
                <Grid.Item span={2}>
                    <Avatar style={{width: 40, height: 40, borderRadius: "50%"}}
                            src={"https://image.whoisamy.shop/hilo/avatar/075f30f7788d412980a021c5d9edd996-20230704-1688458983565.png"}/>
                </Grid.Item>
                <Grid.Item span={4}>
                    <p
                        onClick={() => setPage('popular')}
                        style={{
                            textAlign: 'center',
                            padding: 15,
                            fontSize: 15,
                            color: page === 'popular' ? 'white' : '#a1a0a0'
                        }}>Popular</p>
                </Grid.Item>
                <Grid.Item span={4}>
                    <p
                        onClick={() => setPage('discover')}
                        style={{
                            textAlign: 'center',
                            padding: 15,
                            fontSize: 15,
                            color: page === 'discover' ? 'white' : '#a1a0a0'
                        }}>Discover</p>
                </Grid.Item>
                <Grid.Item span={2}>
                    <Button style={{backgroundColor: "transparent", border: "none", padding: 13}}>
                        <SearchOutline fontSize={20} color='#FFFFFF'/>
                    </Button>
                </Grid.Item>
            </Grid>
        </div>
    )
}

export default Header
