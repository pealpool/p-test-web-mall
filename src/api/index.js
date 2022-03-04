import {trueRequest} from '@/api/ajax'
import {mockRequest} from "@/api/MockAjax";

export const getCategoryList = () => trueRequest.get('/product/getBaseCategoryList');
export const getListCont = () => mockRequest.get('/listCont');
export const getFloor = () => mockRequest.get('/floor');


