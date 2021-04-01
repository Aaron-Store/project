import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/reset.css";
import router from "@/router.js";
import api from "@/api/api.js"
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = api;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


