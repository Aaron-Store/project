<template>
  <el-container>
    <el-header height="">
      <my-header />
    </el-header>
    <el-main style="padding: 0">
      <router-view></router-view>
    </el-main>
    <el-footer height="">
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/index.vue";
export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss">
@import "@/common/sass/public/layout.scss";
</style>