import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);


const ajax = {
    init: function () {
        var that = this;
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
            alert(1);
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // 返回前拦截
        axios.interceptors.response.use(function (response) {
            // do something
            alert(2);
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
        var mToken = 'asdasdadlasdasdasd123';
        axios.defaults.headers.common['Authorization'] = mToken;
        axios({
            url: obj.url,
            baseURL: obj.baseUrl ? obj.baseUrl : 'http://116.62.242.23:8080/',
            method: type,
            timeout: 1000,
            responseType: 'json',
            auth: {
                token: '3294928423942=-34203'
            },
            params: {
                ID: 12345
            },
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
                // console.log(error);
                error && error(e);
            });
    }
};

export default ajax.init()