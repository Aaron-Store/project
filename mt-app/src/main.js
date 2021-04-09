import Vue from 'vue';
import App from './App.vue';
import api from "@/api/api.js";
import router from "@/router.js";
import axios from "./axios";
import ElementUI from 'element-ui';
import store from "@/store.js";
import "@/assets/css/reset.css";
import '@/assets/font/iconfont.css';
import '@/assets/font/iconfont.js';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.prototype.$http = api;
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')