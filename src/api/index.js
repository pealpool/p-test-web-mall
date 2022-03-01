import {gAxios} from "@/api/reAxios";

export const gApi = {
    getListCont() {
        return gAxios.get('/product/getBaseCategoryList');
    }
}