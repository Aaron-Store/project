<template>
  <el-row class="banner-container">
    <!-- banner-left -->
    <el-col :span="5" class="banner-left">
      <div class="banner-nav-container">
        <div class="banner-nav-content">
          <dl>
            <dt>全部分类</dt>
            <dd v-for="(item, index) in bannerNavList" :key="index">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item[1]"></use>
              </svg>
              <span> {{ item[0] }}</span>
            </dd>
          </dl>
        </div>
        <div class="banner-nav-detail"></div>
      </div>
    </el-col>
    <!-- banner-right -->
    <el-col :span="19" class="banner-right">
      <div class="banner-header-links">
        <a @click.prevent="bannerLinkClick">美团外卖</a>
        <a @click.prevent="bannerLinkClick">猫眼电影</a>
        <a @click.prevent="bannerLinkClick">美团酒店</a>
        <a @click.prevent="bannerLinkClick">名宿/公寓</a>
        <a @click.prevent="bannerLinkClick">商家入驻</a>
        <a @click.prevent="bannerLinkClick">美团公益</a>
      </div>
      <div class="banner-row">
        <div class="item banner-silder">
          <el-carousel height="240px">
            <el-carousel-item v-for="item in bannerSliderImgs" :key="item.urls">
              <img :src="item.img" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="item banner-pic"></div>
        <div class="item banner-login-card">
          <img
            src="http://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
            alt=""
          />
          <span>Hi！你好</span>
          <el-button class="medium" round>注册</el-button>
          <el-button class="medium" round>登录</el-button>
        </div>
      </div>
      <div class="banner-row" style="margin-top:10px;">
        <div class="banner-pic1"></div>
        <div class="banner-pic2"></div>
        <div class="banner-pic3"></div>
        <div class="down-app">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
            <p>美团APP手机版</p>
            <p class="last-p">
              <span class="red">1元起</span>吃喝玩乐
            </p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      bannerNavList: [
        ["美食", "#icon-meishi"],
        ["外卖", "#icon-waimai"],
        ["酒店", "#icon-jiudian-copy"],
        ["名宿", "#icon-fangzi"],
        ["猫眼电影", "#icon-Artboard"],
        ["机票 / 火车票", "#icon-jipiaohuochepiao-copy"],
        ["休闲娱乐 / KTV", "#icon-maikefeng-dianji"],
        ["生活服务", "#icon-shenghuofuwu"],
        ["丽人 / 美发 / 医学美容", "#icon-lirenmeirong"],
        ["结婚 / 婚纱摄影 / 婚宴", "#icon-zuanshi"],
        ["亲子 / 儿童乐园 / 幼教", "#icon-qinziyou"],
        ["运动健身 / 健身中心", "#icon-yaling"],
        ["家装 / 建材 / 家居", "#icon-jiancai"],
        ["学习培训 / 音乐培训", "#icon-shijuan"],
        ["医疗健康 / 宠物 / 爱车", "#icon-yiliao"],
        ["酒吧 / 密室逃脱", "#icon-jiuba"],
      ],
      bannerSliderImgs: [
        {
          url: "#xxx",
          img:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        },
        {
          url: "#ass",
          img:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        },
        {
          url: "#vc",
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        },
        {
          url: "#mv",
          img:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        },
        {
          url: "#ef",
          img:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        },
      ],
    };
  },
  methods: {
    bannerLinkClick() {
      this.$message({
        showClose: true,
        type: "success",
        message: "别点了，头发快掉光了",
      });
    },
  },
};
</script>