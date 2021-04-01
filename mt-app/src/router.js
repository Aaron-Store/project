import Vue from "vue";
import router from "vue-router";
Vue.use(router);

import PageIndex from "@/page/index";
import PageLogin from "@/page/login";
import LayoutBlank from "@/layout/blank";

const routes = [
    { path: "/", redirect: "index", component: PageIndex, },
    { path: "/blank", name: "blank", component: LayoutBlank },
    { path: "/index", name: "index", component: PageIndex },
    { path: "/login", name: "login", component: PageLogin },
]


export default new router({
    mode: "history",
    routes,
})