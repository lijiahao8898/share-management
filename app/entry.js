// vue
import Vue from 'vue';
import router from './src/router';

// elementUI
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui';
import {Radio, Loading} from 'element-ui';

// common
import 'styleScss/common/reset.css';
import APP from '../app/app.vue';

Vue.use(ElementUI);
Vue.use(Radio);
Vue.use(Loading.directive);

// loading
Vue.prototype.$loading = Loading.service;

const app = new Vue({
    router: router.router,
    render: h => h(APP)
}).$mount('#app');