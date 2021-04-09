<template>
  <el-row class="header-search">
    <el-col :span="3" class="logo">
      <router-link :to="{ name: 'index' }">
        <img :src="logoUrl" alt="美团" />
      </router-link>
    </el-col>
    <el-col :span="13">
      <div class="wrapper">
        <el-input
          @focus="inputfocus"
          @blur="inputBlur"
          v-model="searchWord"
          placeholder="请输入内容"
        />
        <el-button type="warning" icon="el-icon-search" />
        <dl v-if="searchList.length">
          <dd v-for="(searchItem, index) in searchList" :key="index">
            <router-link
              :ref="searchItem"
              @click="console.log('exec')"
              :to="{ name: 'blank' }"
              >{{ searchItem }}</router-link
            >
          </dd>
        </dl>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      logoUrl:'//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png',
      searchWord: "",
      searchList: [],
    };
  },
  methods: {
    inputBlur() {
      setTimeout(() => {
        this.searchList = [];
      }, 100);
    },
    inputfocus() {
      this.inputDownList(this.searchWord);
    },
    getTaobaoSuggest(newVal) {
      let that = this;
      $.ajax({
        url: "https://suggest.taobao.com/sug",
        type: "get",
        data: {
          area: "c2c",
          code: "utf-8",
          q: newVal,
          callback: "renderDom",
        },
        dataType: "jsonp",
      });
      window.renderDom = function (data) {
        that.searchList = data.result.map((item) => {
          return item[0];
        });
        console.log();
      };
    },
    inputDownList(newVal) {
      if (newVal === "") {
        this.searchList = [];
        return;
      }
      this.$http
        .search()
        .then((data) => {
          const { list } = data;
          this.searchList = list.filter((item) => {
            return item.includes(newVal) && item;
          });
          if (this.searchList.length === 0) {
            return Promise.resolve();
          } else {
            return Promise.reject();
          }
        })
        .then(() => {
          this.getTaobaoSuggest(newVal);
        });
    },
  },
  watch: {
    searchWord(newVal, oldVal) {
      this.inputDownList(newVal);
    },
  },
  mounted() {
    // setTimeout(() => {
    //   console.log("exec");
    //   this.searchList = [1, 2, 3, 4];
    // }, 5000);
  },
};
</script>