import {getPhoneCode} from "@/api";

const state = {
    code: '',

};
const actions = {
    async getPhoneCode_s({commit}, phone) {
        let arr = await getPhoneCode(phone);
        if (arr.code == 200) {
            commit('GETPHONECODE_S', arr.data);
        }
    }
};
const mutations = {
    GETPHONECODE_S(state, value) {
        state.code = value;
    }
};


export default {
    state, actions, mutations
};