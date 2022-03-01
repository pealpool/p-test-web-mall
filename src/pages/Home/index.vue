<template>
  <div>

    <!-- 商品分类导航 -->
    <type-nav/>

    <!--列表-->
    <ListCont/>

    <!--今日推荐-->
    <TodayRec/>

    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
    <Like/>

    <!--楼层-->
    <Floor/>
    <Floor/>

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

export default {
  components: {
    ListCont, TodayRec, Rank, Like, Floor, Brand
  }
}
</script>

<style scoped lang="less">


</style>