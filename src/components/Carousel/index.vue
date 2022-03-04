<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="li in listImage" :key="li.id" class="swiper-slide">
        <img :src="li.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>

import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  props: ['listImage'],
  watch: {
    listImage: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let mySwiper = new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击小球的时候也切换图片
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        })
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>