import {xApi} from '@/api';


const state = {
    listArr: []
};

const actions = {
    async getListArr(context) {
        let arr = await xApi.getListCont();
        context.commit('GETLISTARR', arr);
    }
};

const mutations = {
    GETLISTARR(state, value) {
        state.listArr = value;
    }
};

export default {
    state, actions, mutations
};