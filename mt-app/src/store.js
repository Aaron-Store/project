import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
    // 存放状态
    state: {
        count: 0,
    },
    // state的计算属性
    getters:{
        
    },
    // 更改state中状态的逻辑，同步操作
    mutations:{

    },
    // 提交mutation，异步操作 
    actions:{

    },
    /**
     * 如果将store分成一个个的模块的话，则需要用到modules。
     * 然后在每一个modules中写state、getters、mutations、actions等。
     */
    modules:{

    }
};

export default new Vuex.Store(store);