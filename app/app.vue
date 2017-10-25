<template>
    <div>
        <app-header></app-header>
        <app-wrapper :show-info="isShowWrapper" v-on:ni-hao="alertNi"></app-wrapper>
        <app-footer></app-footer>
    </div>
</template>

<script type="text/babel">
    import Vue from 'vue';
    // 公共组件
    import wrapper from 'vueView/common/app-wrapper.vue';
    import top from 'vueView/common/header.vue';
    import footer from 'vueView/common/footer.vue';

    let lo;
    export default {
        data () {
            return {
                isShowWrapper: false
            }
        },
        created: () => {
            lo = Vue.prototype.$loading({text: '死命加载中...'});
        },
        mounted: function () {
            this.loadingClose();
        },
        components: {
            'app-header': top,
            'app-footer': footer,
            'app-wrapper': wrapper,
        },
        methods: {
            loadingClose: function () {
                let that = this;
                setTimeout(function () {
                    lo.close();
                    that.isShowWrapper = true;
                }, 1000);
            },
            alertNi: function (d) {
                console.log('d:' + d.name);
                //alert('我是父组件，你好');
            }
        }
    }
</script>