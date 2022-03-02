import axios from "axios";
import nprogress from 'nprogress';
import "nprogress/nprogress.css";

export const gAxios = axios.create({
    baseURL: '/api',
    timeout: 5000
})

gAxios.interceptors.request.use(config => {
    nprogress.start();
    return config
})
gAxios.interceptors.response.use(req => {
    nprogress.done();
    return req
}, error => {
    console.log(error);
    return new Promise(()=>{})
});

