import axios from "@/axios.js";

let api = {
    // 登录
    login(params) {
        return axios.get('/api/meituan/login', params)
    },
     /**
     * 商品搜索
     * @returns Promise
     */
    search(params) {
        return axios.get("/api/meituan/header/search.json", { params })
    },
     /**
     * 字母数组
     * @returns Promise
     */
    getCityList() {
        return axios.get('/api/meituan/city/cityList.json')
    },
     /**
     * 省份城市
     * @returns Promise
     */
    getProvince(){
        return axios.get("/api/meituan/city/province.json");
    },
    /**
     * 热门城市
     * @returns Promise
     */
    getHotCity(){
        return axios.get("/api/meituan/city/hot.json");
    }
}

export default api;