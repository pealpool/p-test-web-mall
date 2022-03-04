<template>
  <swiper
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <swiper-slide v-for="li in listImage" :key="li.id">
      <img :src="li.imgUrl"/>
    </swiper-slide>
  </swiper>

</template>

<script>
import { Navigation, Pagination } from 'swiper';
import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

export default {
  props: ['listImage'],
  components: {
    Swiper,
    SwiperSlide
  },
/*  watch:{
    immediate: true,
    handler(){
      this.$nextTick(() => {
        const s = {
          pagination: {
            clickable: true,
          },
        }
        Swiper = s
      });
    }
  },*/
  methods: {
    onSwiper (swiper) {
      // console.log(swiper)
    },
    onSlideChange () {
      // console.log('slide change')
    }
  }
}
</script>

<style scoped lang="less">

</style>