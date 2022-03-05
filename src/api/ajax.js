import axios from "axios";
import nprogress from "nprogress"
import "nprogress/nprogress.css"

export let trueRequest = axios.create({
    baseURL: '/api',
    timeout: 5000
})

trueRequest.interceptors.request.use((config) => {
    nprogress.start();
    return config;
})
trueRequest.interceptors.response.use(
    (res) => {
        nprogress.done();
        return res.data;
    }, (error) => {
        console.log('数据返回失败:', error);
        return new Promise(() => {
        });
    }
)

