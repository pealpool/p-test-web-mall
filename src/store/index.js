import Vue from "vue";
import Vuex from "vuex";
import typeNavList from "@/store/typeNavList";
import search from "@/store/search";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {typeNavList, search}
});