<template>
  <div class="outer">
    <Header/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.footerHide"/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<style scoped lang="less">

</style>
