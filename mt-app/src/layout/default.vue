<template>
  <el-container>
    <el-header>
      <my-header height="" />
    </el-header>
    <el-main>Main</el-main>
    <el-footer height="">Footer</el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/index.vue";
export default {
  components: {
    MyHeader,
    MyFooter
  },
};
</script>

<style lang="scss">
@import "@/common/sass/public/layout.scss";
</style>