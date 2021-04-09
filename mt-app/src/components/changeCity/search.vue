<template>
  <div :class="{ isSelect: !isSelect }" class="city-search" @click="select">
    <span class="curText">{{ curText }}</span>
    <div class="provinces-wrapper">弹出</div>
  </div>
</template>

<script>
export default {
  props: ["curText", "isSelect"],
  data() {
    return {
      // curText: "省份",
    };
  },
  methods: {
    select() {},
  },
};
</script>
<style scoped lang="scss">
.city-search {
  width: 100px;
  position: relative;
  border: 1px solid #ececec;
  cursor: pointer;
  margin-left: 10px;
  padding: 8px 10px;
  user-select: none;
  &.isSelect {
    cursor: not-allowed;
  }
  .curText {
    display: inline-block;
    width: 100px;
    font-size: 14px;
    color: #666;
    &::after {
      content: "▼";
      // display: inline-block;
      vertical-align: middle;
      float: right;
      font-weight: bolder;
    }
  }
  div.provinces-wrapper {
    position: absolute;
    display: none;
  }
}
</style>