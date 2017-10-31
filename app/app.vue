<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    import Vue from 'vue';

    let lo;

    export default {
        data() {
            return {}
        },
        created: function () {
            lo = Vue.prototype.$loading({text: '死命加载中...'});
        },
        mounted: function () {
            this.loadingClose();
        },
        updated: function () {

        },
        components: {

        },
        methods: {
            loadingClose: function () {
                let that = this;
                setTimeout(function () {
                    lo.close();
                    that.isShowWrapper = true;
                }, 200);
            }
        }
    }
</script>