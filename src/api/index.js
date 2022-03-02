import {getApi} from '@/api/ajax'

export const getListCont = () => getApi.get('/product/getBaseCategoryList');

