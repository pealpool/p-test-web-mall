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
import "swiper/css/swiper.css";
import Swiper from "swiper";


export default {
  props: ['listImage'],
  components: {
    Swiper,
    SwiperSlide
  },
  watch:{
    immediate: true,
    handler(){
      this.$nextTick(() => {
        new Swiper('.swiper', {
          autoplay: {
            delay: 500,
          },
        });
      });
    }
  },
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