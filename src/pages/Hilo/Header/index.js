import {Avatar, Button, Grid, Popup, Form, Input} from "antd-mobile";
import {SearchOutline} from "antd-mobile-icons";
import {useEffect, useRef, useState} from "react";
import {httpHilo} from "@/utils";

const Header = ({page, setPage}) => {
    const [avatar, setAvatar] = useState([])
    const [open, setOpen] = useState(true)
    useEffect(() => {
        httpHilo.get("/v1/user/detail").then(r => {
            if (r.data?.avatar?.length > 0) {
                setAvatar(r.data.avatar)
            }
        })
    }, [])
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div style={{padding: 10, height: 94, backgroundColor: "purple", borderRadius: "0 0 30% 30%"}}>
            <Popup
                visible={open}
                onMaskClick={() => {
                    setOpen(false)
                }}
                position='left'
                bodyStyle={{width: '60vw'}}
            >
                <Form
                    name='form'
                    onFinish={onFinish}
                    footer={
                        <Button block type='submit' color='primary' size='large'>
                            提交
                        </Button>
                    }
                >
                    <Form.Header>竖直布局表单</Form.Header>
                    <Form.Item name='name' label='姓名' rules={[{required: true}]}>
                        <Input placeholder='请输入姓名'/>
                    </Form.Item>
                    <Form.Item name='address' label='地址' help='详情地址'>
                        <Input placeholder='请输入地址'/>
                    </Form.Item>
                    <Form.Item name='disabledField' label='禁用' disabled>
                        <Input placeholder='禁止输入'/>
                    </Form.Item>
                </Form>
            </Popup>
            <Grid columns={12} gap={10}>
                <Grid.Item span={2}>
                    <Avatar
                        style={{width: 40, height: 40, borderRadius: "50%"}}
                        src={avatar}
                        onClick={() => setOpen(true)}
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
