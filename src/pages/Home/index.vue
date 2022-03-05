<template>
  <div>

    <!-- 商品分类导航 -->
    <TypeNav/>

    <!--列表-->
    <ListCont :listImage="listContJSON"/>

    <!--今日推荐-->
    <TodayRec/>

    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
    <Like/>

    <!--楼层-->
    <Floor v-for="(f,index) in floorJSON" :key="f.id" :floorImage="floorJSON[index]"/>

    <!--商标-->
    <Brand/>

  </div>
</template>

<script>
import ListCont from '@/pages/Home/ListCont'
import TodayRec from '@/pages/Home/TodayRec'
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
import TypeNav from "@/components/TypeNav"
import {getListCont, getFloor} from '@/api'

export default {
  name: 'home',
  data() {
    return {
      listContJSON: [],
      floorJSON: [],
    }
  },
  components: {
    ListCont, TodayRec, Rank, Like, Floor, Brand, TypeNav
  },
  mounted() {
    let $this = this;
    (async function (){
      let r = await getListCont();
      if(r.code == 200){
        $this.listContJSON = r.data;
      }
    })();
    (async function (){
      let r = await getFloor();
      if(r.code == 200){
        $this.floorJSON = r.data;
      }
    })();
  }
}

</script>

<style scoped lang="less">


</style>