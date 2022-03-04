import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import store from "@/store";
import "@/mock/server";
// import 'swiper/css'

Vue.config.productionTip = false;
Vue.component('TypeNav', TypeNav);
Vue.component('Carousel', Carousel);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
