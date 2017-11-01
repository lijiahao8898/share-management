// vue
import Vue from 'vue';
import router from './src/router';

// ajax
import axios from 'axios';

// elementUI
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
import {Radio, Loading} from 'element-ui';

// common
import 'styleScss/common/reset.css';
import APP from '../app/app.vue';

// vue插件
import VueParticles from 'vue-particles'

Vue.use(ElementUI);
Vue.use(Radio);
Vue.use(Loading.directive);
Vue.use(VueParticles);
Vue.prototype.$axios = axios;

// loading
Vue.prototype.$loading = Loading.service;

const app = new Vue({
    router: router.router,
    render: h => h(APP)
}).$mount('#app');