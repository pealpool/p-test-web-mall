import {getApi} from '@/api/ajax'

export const xApi = {
    getListCont() {
        return getApi.get('/product/getBaseCategoryList')
    }
}