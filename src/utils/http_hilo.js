import axios from "axios"
import {getHiloToken} from "@/utils/token";

const httpHilo = axios.create({
    baseURL: "https://apiv1.faceline.live",
    timeout: 100000,
})

// 请求拦截器
// config: http的config
httpHilo.interceptors.request.use((config) => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjc2NTcwOTEsIkV4dGVybmFsSWQiOiIyNzMzODczM2VmOTM0N2ZmODdkNmEwYzUwY2Q1NjU3ZSIsImV4cCI6MjU1MzIyNzI1NCwiaXNzIjoiaGlsb0FwaSJ9.bcM1JlBlPlUIrmSS139klm_Zs-sdb3g0drtaP2Mz0NE"
    if (getHiloToken()) {
        token = getHiloToken()
    }
    if (token) {
        config.headers.token = `${token}`
        config.headers.nonce = `hilo`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
httpHilo.interceptors.response.use((response) => {
    if (response.data.code !== 200) {
        return Promise.reject(response.data.message)
    }
    return response.data
}, (error) => {
    if (error.response.status === 401) {
        console.log('401:', error.response)
        alert("token miss")
    }
    return Promise.reject(error) // 会throw error，可以被catch到
})

export {httpHilo}