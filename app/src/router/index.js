import Vue from 'vue';
import VueRouter from 'vue-router';

import login from 'vueView/login.vue';
import marketTool from 'vueView/market-tool.vue';

Vue.use(VueRouter);

// 配置路由映射
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '',
            component: marketTool
        },{
            path: '/marketing-tool',
            component: marketTool
        }]
});

export default {
    router: router
}