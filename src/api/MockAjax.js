import axios from "axios";
import nprogress from "nprogress"
import "nprogress/nprogress.css"

export const mockRequest = axios.create({
    baseURL: '/mock',
    timeout: 5000
})

mockRequest.interceptors.request.use((config) => {
    nprogress.start();
    return config;
})
mockRequest.interceptors.response.use(res => {
    nprogress.done();
    return res.data;
}, error => {
    console.log('数据返回失败:', error);
    return new Promise(() => {});
})

