import {getListCont} from '@/api';


const state = {
    listArr: []
};

const actions = {
    async getListArr(context) {
        let arr = await getListCont();
        context.commit('GETLISTARR', arr.data);
    }
};

const mutations = {
    GETLISTARR(state, value) {
        state.listArr = value.data;
    }
};

export default {
    state, actions, mutations
};