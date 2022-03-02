import {gApi} from '@/api';


const state = {
    listArr: []
};

const actions = {
    async getListArr(context) {
        let arr = await gApi.getListCont();
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