import axios from "axios";
axios.defaults.baseURL = "http://open.duyiedu.com";
// axios.defaults.baseURL = "https://www.baidu.com";
// appkey fuchengzhiji_1569908009862
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data.data;
    } else {
        return response.data;
    }
})
export default axios;