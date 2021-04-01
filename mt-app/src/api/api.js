import axios from "@/axios.js";

let api = {
    login(params) {
        return axios.get('/api/meituan/login', params)
    },
    search(params) {
        return axios.get("/api/meituan/header/search.json", { params })
    }
}

export default api;