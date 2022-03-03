import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/pages/Home')
        },
        {
            path: '/home',
            component: Home
        },
        {
            name:'search',
            path: '/search/:id?',
            component: Search
        },
        {
            path: '/detail',
            component: Detail
        },
        {
            path: '/login',
            component: Login,
            meta:{
                footerHide:true
            }
        },
        {
            path: '/register',
            component: Register,
            meta:{
                footerHide:true
            }
        },

    ]
})