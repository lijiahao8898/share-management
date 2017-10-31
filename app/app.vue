<template>
    <div>
        <div v-if="!isLogin">
            <app-header></app-header>
            <app-wrapper :show-info="isShowWrapper" v-on:ni-hao="alertNi"></app-wrapper>
            <app-footer></app-footer>
            <app-gotop></app-gotop>
        </div>
        <div v-else>
            <app-login></app-login>
        </div>
    </div>
</template>

<script type="text/babel">
    import Vue from 'vue';
    // 公共组件
    import wrapper from 'vueView/common/app-wrapper.vue';
    import top from 'vueView/common/header.vue';
    import footer from 'vueView/common/footer.vue';
    import goTop from 'vueView/components/gotop.vue'
    import login from 'vueView/login.vue'

    let lo;
    export default {
        data() {
            return {
                isLogin: false,
                isShowWrapper: false,
                routerPath: this.$route.path
            }
        },
        created: function () {
            lo = Vue.prototype.$loading({text: '死命加载中...'});
        },
        mounted: function () {
            this.loadingClose();
//            if (this.$route.path === '/login') {
//                this.isLogin = true;
//            } else {
//                this.isLogin = false;
//            }
        },
        updated: function () {

        },
        components: {
            'app-header': top,
            'app-footer': footer,
            'app-wrapper': wrapper,
            'app-gotop': goTop,
            'app-login': login
        },
        methods: {
            loadingClose: function () {
                let that = this;
                setTimeout(function () {
                    lo.close();
                    that.isShowWrapper = true;
                }, 200);
            },
            alertNi: function (d) {
//                console.log('d:' + d.name);
                //alert('我是父组件，你好');
            }
        },
        watch: {
            routerPath: {
                handle: function (val, oldVal) {
                    if (val === '/login') {
                        this.isLogin = true;
                    } else {
                        this.isLogin = false;
                    }
                },
                deep: true
            }
        }
    }
</script>