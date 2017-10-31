import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(VueRouter);



const ajax = {
    init: function () {
        var that = this;
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
    vueAxios: function (type, obj, success, error) {
        if (type === 'get') {
            axios.defaults.params = obj.data
        } else {
            axios.defaults.data = obj.data
        }
        axios({
            url: obj.url,
            baseURL: obj.baseUrl ? obj.baseUrl : 'http://192.168.3.132:8080/',
            method: type,
            timeout: 1000,
            responseType: 'json'
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
            })
    }
};

export default ajax.init()