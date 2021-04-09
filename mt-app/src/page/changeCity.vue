<template>
  <div class="page">
    <!-- 搜索栏 -->
    <el-row class="op-area">
      <div class="left">
        <h3>按省份选择:</h3>
        <search isSelect="true" :curText="opSearchProvince"></search>
        <search :isSelect="opSearchProvince !== '省份'" curText="城市"></search>
      </div>
      <div class="right">
        <h3>直接搜索：</h3>
        <el-input placeholder="请输入城市中文或拼音" />
      </div>
    </el-row>
    <!-- 热门城市 -->
    <el-row class="citylist">
      <h3>热门城市：</h3>
      <p class="rm-city">
        <router-link
          v-for="item in hotCity"
          :key="item.id"
          class="city"
          @click="selectCity(item.id)"
          :to="{ name: 'changeCity' }"
          >{{ item.name }}</router-link
        >
      </p>
    </el-row>
    <!-- 最近访问 -->
    <el-row class="citylist recent-city">
      <h3>最近访问：</h3>
      <p class="rm-city">
        <router-link
          v-for="item in 5"
          :key="item"
          class="city"
          :to="{ name: 'index' }"
          >北京</router-link
        >
      </p>
    </el-row>
    <!-- 字母跳转 -->
    <el-row class="alphabet">
      <h3>按拼音首字母选择：</h3>
      <p class="r-info">
        <span
          @click="hashClick(item)"
          class="letter"
          v-for="item in letterStr"
          :key="item"
        >
          {{ item }}
        </span>
      </p>
    </el-row>
    <!-- 首字母城市列表 -->
    <el-row class="alphabet-city-area">
      <div
        v-for="letter in letterStr"
        :key="letter"
        class="city-area"
        :id="'city-' + letter"
      >
        <span class="city-label"> {{ letter }}</span>
        <div class="cities"></div>
      </div>
    </el-row>
  </div>
</template>
<script>
import search from "@/components/changeCity/search.vue";
import api from "@/api/api.js";
export default {
  created() {
    let netQueue = [];
    netQueue.push(api.getCityList());
    netQueue.push(api.getHotCity());
    Promise.all(netQueue)
      .then((resArr) => {
        this.hotCity = resArr[1];
        this.letterCity = resArr[0];
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {
    // this.axios.get("/api/meituan/index/nav.json").then((data) => {
    //   console.log("左侧导航条 导航数据", data);
    // });
    // this.axios.get("/api/meituan/index/resultsByKeywords.json").then((data) => {
    //   console.log("格调内容区数据", data);
    // });
    // this.axios.get("/api/meituan/city/cityList.json").then((data) => {
    //   console.log("城市列表接口", data);
    // });
    // this.axios.get("/api/meituan/city/hot.json").then((data) => {
    //   console.log("热门城市", data);
    // });
    // this.axios.get("/api/meituan/city/province.json").then((data) => {
    //   console.log("省份列表", data);
    // });
    // this.axios.get("/api/meituan/city/recents.json").then((data) => {
    //   console.log("搜索城市", data);
    // });
    //   this.axios.get("/api/meituan/list/goodsList.json").then((data) => {
    //     console.log("产品展示列表数据", data);
    //   });
    //   this.axios.get("/api/meituan/list/recommend.json").then((data) => {
    //     console.log("推荐产品列表", data);
    //   });
    //   this.axios.get("/api/meituan/list/classify.json").then((data) => {
    //     console.log("分类列表", data);
    //   });
    // this.axios.get("/api/meituan/list/areaList.json").then((data) => {
    //   console.log("区域列表", data);
    // });
    //   this.axios.get("/api/meituan/city/getPosition.json").then((data) => {
    //     console.log("当前位置信息", data);
    //   });
  },
  components: {
    search,
  },
  data() {
    return {
      letterStr: "ABCDEFGHIJKLMNOPQRSTWXYZ",
      hotCity: [],
      letterCity: [],
      isSelect: false,
      opSearchProvince: "省份",
    };
  },
  methods: {
    hashClick(e) {
      location.hash = `city-${e}`;
    },
    selectCity(e) {
      console.log(e);
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/common/sass/city/index.scss";
</style>