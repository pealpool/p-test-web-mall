import {getSearch} from "@/api";

const state = {
    searchInfo: {}
};

const actions = {
    async getSearchInfo({commit}, params = {}) {
        let arr = await getSearch(params);
        // if (arr.code == 200) {
            commit('GETSEARCHINFO', arr.data);
        // }
    }
};

const mutations = {
    GETSEARCHINFO(state, value) {
        state.searchInfo = value;
    }
};

export default {
    state, actions, mutations
};