<template>
  <div class="container">
    <el-row class="content-item">
      <chunk-bar
        bgColor="#fe4550"
        :item-list="navItemList"
        @indexChange="indexChange"
      ></chunk-bar>
      <div class="slider">
        <div class="slider-box clearfix">
          <div
            class="slider-item-film"
            v-for="(item, index) in renderList"
            :key="index"
          >
            <!-- <a href="javascript:;" target="_blank"> -->
            <img :src="item.imgUrl" />
            <div class="film-info">
              <p class="film-score">
                <b
                  >观众评 <span>{{ item.source }}</span></b
                >
              </p>
              <p class="film-name">{{ item.name }}</p>
              <span class="buy-ticket">购票</span>
            </div>
            <!-- </a> -->
          </div>
        </div>
        <div class="btn prev">&lt;</div>
        <div class="btn next">&gt;</div>
      </div>
    </el-row>
      <el-row class="content-item">
      <chunk-bar
        bgColor="#fe4550"
        :item-list="navItemList"
        @indexChange="indexChange"
      ></chunk-bar>
      <div class="slider">
        <div class="slider-box clearfix">
          <div
            class="slider-item-film"
            v-for="(item, index) in renderList"
            :key="index"
          >
            <!-- <a href="javascript:;" target="_blank"> -->
            <img :src="item.imgUrl" />
            <div class="film-info">
              <p class="film-score">
                <b
                  >观众评 <span>{{ item.source }}</span></b
                >
              </p>
              <p class="film-name">{{ item.name }}</p>
              <span class="buy-ticket">购票</span>
            </div>
            <!-- </a> -->
          </div>
        </div>
        <div class="btn prev">&lt;</div>
        <div class="btn next">&gt;</div>
      </div>
    </el-row>
      <el-row class="content-item">
      <chunk-bar
        bgColor="#fe4550"
        :item-list="navItemList"
        @indexChange="indexChange"
      ></chunk-bar>
      <div class="slider">
        <div class="slider-box clearfix">
          <div
            class="slider-item-film"
            v-for="(item, index) in renderList"
            :key="index"
          >
            <!-- <a href="javascript:;" target="_blank"> -->
            <img :src="item.imgUrl" />
            <div class="film-info">
              <p class="film-score">
                <b
                  >观众评 <span>{{ item.source }}</span></b
                >
              </p>
              <p class="film-name">{{ item.name }}</p>
              <span class="buy-ticket">购票</span>
            </div>
            <!-- </a> -->
          </div>
        </div>
        <div class="btn prev">&lt;</div>
        <div class="btn next">&gt;</div>
      </div>
    </el-row>
      <el-row class="content-item">
      <chunk-bar
        bgColor="#fe4550"
        :item-list="navItemList"
        @indexChange="indexChange"
      ></chunk-bar>
      <div class="slider">
        <div class="slider-box clearfix">
          <div
            class="slider-item-film"
            v-for="(item, index) in renderList"
            :key="index"
          >
            <!-- <a href="javascript:;" target="_blank"> -->
            <img :src="item.imgUrl" />
            <div class="film-info">
              <p class="film-score">
                <b
                  >观众评 <span>{{ item.source }}</span></b
                >
              </p>
              <p class="film-name">{{ item.name }}</p>
              <span class="buy-ticket">购票</span>
            </div>
            <!-- </a> -->
          </div>
        </div>
        <div class="btn prev">&lt;</div>
        <div class="btn next">&gt;</div>
      </div>
    </el-row>
  </div>
</template>
<script>
import ChunkBar from "@/components/index/chunkBar.vue";

export default {
  data() {
    return {
      navItemList: ["猫眼电影", ["正在热映", "即将上映"]],
    };
  },
  components: {
    ChunkBar,
  },
  methods: {
    indexChange(e) {
      // console.log(e);
    },
  },
  computed: {
    renderList() {
      const data = [
        {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
        {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
        {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
        {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
        {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
        {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐-2s",
          source: "8.9",
        },
           {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
           {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
           {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
           {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },

           {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
           {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
           {
          url: "https://maoyan.com/films/1222234",
          imgUrl:
            "//p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@267w_371h_1e_1c",
          name: "我的姐姐",
          source: "8.9",
        },
      ];
      return data;
    },
  },
};
</script>