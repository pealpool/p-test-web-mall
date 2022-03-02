import Vue from "vue";
import Vuex from "vuex";
import typeNavList from "@/store/typeNavList";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        typeNavList
    }
});