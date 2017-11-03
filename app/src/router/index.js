import Vue from 'vue';
import VueRouter from 'vue-router';

import login from 'vueView/login.vue';
import marketTool from 'vueView/market-tool.vue';
import spread from 'vueView/spread.vue';
import home from 'vueView/common/app-wrapper.vue'
import notFound from 'vueView/404.vue'

Vue.use(VueRouter);

// 配置路由映射
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '',
            component: login
        }, {
            path: '*',
            component: notFound
        }, {
            path: '/login',
            component: login,
            props: {
                isLogin: false
            }
        }, {
            path: '/home',
            component: home,
            children: [
                {
                    path: '',
                    component: spread,
                    redirect: '/home/spread',
                }, {
                    path: 'spread',
                    component: spread
                }, {
                    path: 'marketing-tool',
                    component: marketTool
                }
            ]
        }]
});

router.afterEach((to, from) => {
    // console.log(to);
    // console.log(from);
});

export default {
    router: router
}