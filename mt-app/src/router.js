import Vue from "vue";
import router from "vue-router";
Vue.use(router);

import PageIndex from "@/page/index";
import PageLogin from "@/page/login";
import LayoutDefault from "@/layout/default";
import PageRegister from "@/page/register";
import PageChangeCity from "@/page/changeCity";
const routes = [
    {
        path: "/", name: "defaultPage", component: LayoutDefault,
        redirect: "/index",
        children: [
            { path: "index", name: "index", component: PageIndex },
            { path: "changeCity", name: "changeCity", component: PageChangeCity }
        ]
    },
    { path: "/login", name: "login", component: PageLogin },
    { path: "/register", name: "register", component: PageRegister },
]


export default new router({
    mode: "history",
    routes,
})