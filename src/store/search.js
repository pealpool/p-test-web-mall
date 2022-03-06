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
const getters = {
    attrsList(state) {
        return state.searchInfo.attrsList || [];
    },
    goodsList(state) {
        return state.searchInfo.goodsList || [];
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || [];
    },
}

export default {
    state, actions, mutations, getters
};