import axios from "axios";
import nprogress from "nprogress"
import "nprogress/nprogress.css"

export const getApi = axios.create({
    baseURL: '/api',
    timeout: 5000
})

getApi.interceptors.request.use((config) => {
    nprogress.start()
    console.log(nprogress)
    return config
})
getApi.interceptors.response.use(res => {
    nprogress.done()
    return res
}, error => {
    console.log('数据返回失败:', error);
    return new Promise(() => {
    })
})

