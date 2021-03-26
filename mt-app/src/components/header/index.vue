<template>
  <div class="my-header">
    <top-bar />
    <search-bar />
  </div>
</template>
<script>
import topBar from "./topBar";
import searchBar from "./searchBar";
export default {
  components: {
    topBar,
    searchBar,
  },
};
</script>