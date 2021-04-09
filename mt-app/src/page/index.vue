<template>
  <div class="page-index">
    <banner-container />
    <container />
  </div>
</template>

<script>
import BannerContainer from "@/components/index/banner.vue";
import container from "@/components/index/container.vue";
export default {
  components: {
    BannerContainer,
    container
  },
};
</script>
<style lang="scss">
@import "@/common/sass/index/index.scss";
</style>;
