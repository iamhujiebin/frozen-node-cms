import {Avatar, Button, Grid, Popup, Form, Input, List, Image} from "antd-mobile";
import {SearchOutline} from "antd-mobile-icons";
import {useEffect, useState} from "react";
import {getHiloToken, httpHilo, setHiloToken} from "@/utils";

const styleP = {
    padding: 10, height: 94, backgroundColor: "purple", borderRadius: "0 0 30% 30%"
}
const styleD = {
    padding: 10, height: 54, backgroundColor: "purple"
}

const Header = ({page, setPage}) => {
    const [open, setOpen] = useState(false)
    const [userDetail, setUserDetail] = useState({})
    const getUserDetail = () => {
        httpHilo.get("/v1/user/detail").then(r => {
            if (r.data?.avatar?.length > 0) {
                setUserDetail(r.data)
            }
        })
    }
    useEffect(() => {
        getUserDetail()
    }, [])
    const onFinish = (values) => {
        setHiloToken(values.token)
        setOpen(false)
        getUserDetail()
    }
    const onOpen = () => {
        getUserDetail()
        setOpen(true)
    }
    return (
        <div style={page === 'popular' ? styleP : styleD}>
            <Popup
                visible={open}
                onMaskClick={() => {
                    setOpen(false)
                }}
                position='left'
                bodyStyle={{width: '60vw'}}
            >
                <List header='用户信息'>
                    <List.Item
                        key={userDetail.id}
                        prefix={
                            <Image
                                src={userDetail.avatar}
                                style={{borderRadius: 20}}
                                fit='cover'
                                width={40}
                                height={40}
                            />
                        }
                        description={(
                            <div style={{padding: 2}}>
                                <p>id:{userDetail.id}</p>
                                <p>code:{userDetail.code}</p>
                                <p>country:{userDetail.country} <img src={userDetail.countryIcon}
                                                                     style={{width: 20, height: 15}}/></p>
                            </div>
                        )}
                    >
                        {userDetail.nick}
                    </List.Item>
                </List>
                <Form
                    name='form'
                    onFinish={onFinish}
                    footer={
                        <Button block type='submit' color='primary' size='large'>
                            更新token
                        </Button>
                    }
                >
                    <Form.Item name='token' label='token'>
                        <Input placeholder={getHiloToken()}/>
                    </Form.Item>
                </Form>
            </Popup>
            <Grid columns={12} gap={10}>
                <Grid.Item span={2}>
                    <Avatar
                        style={{width: 40, height: 40, borderRadius: "50%"}}
                        src={userDetail.avatar}
                        onClick={() => onOpen()}
                    />
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
