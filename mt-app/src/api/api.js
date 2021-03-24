import axios from "@/axios.js";

let api = {
    login(params) {
        return axios.get('/api/meituan/login', params)
    },
}

export default api;