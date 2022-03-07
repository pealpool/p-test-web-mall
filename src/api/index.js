import {trueRequest} from '@/api/ajax'
import {mockRequest} from "@/api/MockAjax";

export const getCategoryList = () => trueRequest.get('/product/getBaseCategoryList');
export const getListCont = () => mockRequest.get('/listCont');
export const getFloor = () => mockRequest.get('/floor');

export const getSearch = (data) =>
    trueRequest({
            url: '/list',
            method: 'post',
            data: data
        }
    );

export const getPhoneCode = (phone) => trueRequest.get(`/user/passport/sendCode/${phone}`);