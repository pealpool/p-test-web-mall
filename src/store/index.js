import Vue from "vue";
import Vuex from "vuex";
import listCont from "@/store/listCont";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        listCont
    }
});