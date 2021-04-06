<template>
  <div class="my-footer">
      <footer-link />
      <copy-right />
  </div>
</template>

<script>
import CopyRight from "@/components/footer/footer-copyright.vue";
import FooterLink from "@/components/footer/footer-link.vue";
export default {
    components:{
        CopyRight,
        FooterLink
    }
};
</script>
