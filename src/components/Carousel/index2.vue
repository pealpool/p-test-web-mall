<template>
  <div class="swiper" ref="mySwiper">
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

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default {
  props: ['listImage'],
  watch: {
    listImage: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          /*let swiper = new Swiper('.swiper', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // modules: [Navigation, Pagination],
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })*/
          const swiper = new Swiper('.swiper', {
            // Optional parameters
            // direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
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