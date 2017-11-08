import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
    isLogin: false,
    count: 0,
    money: 0
};

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
})