import {getApi} from '@/api/ajax'

export const xApi = {
    getListCont() {
        // return getApi('/product/getBaseCategoryList', 'GET')
        return getApi.get('/product/getBaseCategoryList')
    }
}