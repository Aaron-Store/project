<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import pageIndex from "@/page/index.vue";

export default {
  name: "app",
  components:{
    pageIndex,
  }
};
</script>       
<style lang="scss">
</style>