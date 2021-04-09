<template>
  <div class="chunk-bar">
    <dl class="chunk-dl" @mousemove="selectItem" :style="{background:bgColor}">
      <dt class="chunk-dt">{{ itemList[0] }}</dt>
      <dd
        class="chunk-item"
        :class="{ active: curItem == index }"
        v-for="(item, index) in itemList[1]"
        :data-index="index"
        :key="index"
      >
        {{ item }}
      </dd>
    </dl>
  </div>
</template>
<script>
// indedx area-header-cmp
export default {
  props: {
    itemList: {
      type: Array,
      default: () => ["title", ["item1", "item2"]],
    },
    bgColor:{
      type:String,
      default:"#999"
    }
  },
  data() {
    return {
      curItem: 0,
    };
  },
  methods: {
    selectItem(e) {
      const { target } = e;
      if (target.tagName === "DL" || target.tagName == "DT") return;
      if (this.curItem == target.dataset.index) return;
      setTimeout(()=>{
         this.curItem=target.dataset.index;
      },200)
      this.$emit("indexChange",this.curItem)
    },
  },
};
</script>
<style scoped lang="scss">
dl.chunk-dl {
  display: flex;
  height: 44px;
  line-height: 44px;
  color: #efefef;
  background: #999;
  user-select: none;
  cursor: pointer;
  padding-left: 0.8em;
  // vertical-align: bottom;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  dt {
    font-size: 1.2rem;
  }
  dd {
    font-size:1rem;
    line-height: 3;
    vertical-align: bottom;
    margin-left: 10px;
    // border: 1px solid #999;
    box-sizing: border-box;
    position: relative;
    // vertical-align:10px ;
    &.active {
      &::after {
        display: block;
      }
    }
    &::after {
      display: none;
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      border: 6px solid #efefef;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
    }
  }
}
</style>