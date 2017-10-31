import Vue from 'vue';
import VueRouter from 'vue-router';

import login from 'vueView/login.vue';
import marketTool from 'vueView/market-tool.vue';
import spread from 'vueView/spread.vue';

Vue.use(VueRouter);

// 配置路由映射
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '',
            component: spread
        }, {
            path: '/spread',
            component: spread
        }, {
            path: '/marketing-tool',
            component: marketTool
        }, {
            path: '/login',
            component: login,
            props: {
                isLogin: false
            }
        }]
});

export default {
    router: router
}