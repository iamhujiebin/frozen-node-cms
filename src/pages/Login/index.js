import {Card, Form, Input, Button, Checkbox, message} from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import {useStore} from '@/store'
import {useNavigate} from 'react-router-dom'
import {isMobile} from "react-device-detect";
import {getCode, setCode, getMobile, setMobile} from "@/utils"

const Login = () => {
    let loginStyle = "login-container"
    if (isMobile) {
        loginStyle = "login-container-mobile"
    }
    const {loginStore} = useStore()
    const navigate = useNavigate()
    const onFinish = async (data) => {
        console.log(data)
        const {mobile, code} = data
        try {
            await loginStore.login({mobile, code})
            setMobile(mobile)
            setCode(code)
            message.success('登录成功')
            navigate('/') // 登录成功跳转 根路径
        } catch (e) {
            console.log('err?', e)
            message.error(e.response?.data?.message || '手机号后六位') // 这么牛逼的写法
        }
    }
    return (
        <div className='login'>
            <Card className={loginStyle}>
                <img className='login-logo' src={logo} alt=''></img>
                {/* 登录表单 */}
                {/* onBlur:失去焦点*/}
                <Form
                    validateTrigger={['onBlur', 'onChange']}
                    onFinish={onFinish}
                    initialValues={{
                        mobile: getMobile() ? getMobile() : '',
                        code: getCode() ? getCode() : '',
                    }}
                >
                    <Form.Item
                        name='mobile'
                        rules={
                            [
                                {required: true, message: '请输入手机号'},
                                {pattern: /^1[3-9]\d{9}$/, message: '手机号格式不对', validateTrigger: 'onBlur'}
                            ]
                        }
                    >
                        <Input size='large' placeholder='请输入手机号'/>
                    </Form.Item>
                    <Form.Item
                        name='code'
                        rules={
                            [
                                {len: 6, message: '验证码6个字符', validateTrigger: 'onBlur'},
                                {required: true, message: '请输入验证码'}
                            ]
                        }
                    >
                        <Input size='large' placeholder='请输入验证码'/>
                    </Form.Item>
                    <Form.Item name='agreement'>
                        <a className='login-checkbox-label' href="https://beian.miit.gov.cn/" target="_blank">
                            备案号：粤ICP备2024174505号-1
                        </a>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' size='large' block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login