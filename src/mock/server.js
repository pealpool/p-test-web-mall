import Mock from 'mockjs';
import listContJSON from '@/mock/listContJSON';
import floorJSON from '@/mock/floorJSON.json';

Mock.mock('/mock/listCont',{code:200, data: listContJSON});
Mock.mock('/mock/floor',{code:200, data: floorJSON});