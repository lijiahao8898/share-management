/**
 * 登录失效 401
 * 登录失败 405
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import cookie from './cookie';

Vue.use(VueRouter);
console.log(cookie);


const ajax = {
    init: function () {
        let that = this;
        that.interceptorsAxios();
        return {
            post: function (obj, success, error) {
                that.post(obj, success, error);
            },
            get: function (obj, success, error) {
                that.get(obj, success, error);
            }
        }
    },
    get: function (obj, success, error) {
        this.vueAxios('get', obj, success, error)
    },
    post: function (obj, success, error) {
        this.vueAxios('post', obj, success, error)
    },
    interceptorsAxios: function () {
        // 请求前拦截
        axios.interceptors.request.use(function (config) {
            // do something
            let token = cookie.get("token");
            if (token) {
                config.headers.token = token
            }
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // 返回前拦截
        axios.interceptors.response.use(function (response) {
            // do something
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    },
    vueAxios: function (type, obj, success, error) {
        if (type === 'get') {
            axios.defaults.params = obj.data
        } else {
            axios.defaults.data = obj.data
        }
        let url = 'http://116.62.242.23:8080/';
        //let url = 'http://192.168.3.132:8080/';

        console.log(axios.defaults);

        axios({
            url: obj.url,
            baseURL: obj.baseUrl ? obj.baseUrl : url,
            method: type,
            timeout: 1000,
            responseType: 'json',
            auth: {
                token: '3294928423942=-34203'
            },
            params: {},
        })
            .then(function (res) {
                // console.log(res);
                // if (res.data.code === 10000) {
                //     success && success(res);
                // } else if( res.data.code === 40000 ){
                //     error && error(res);
                //     //location.replace('/#/login')
                // } else{
                //     error && error(res);
                // }
                success && success(res);
            })
            .catch(function (e) {
                console.log(e.response.data);
                if (e.response.data.status === 401) {
                    obj.message.error(e.response.data.message);
                    obj.router.push('/login');
                }
                error && error(e);
            });
    }
};

export default ajax.init();