<template>
    <div>
        <app-header></app-header>
        <div class="app-wrapper" @click="alertHi">
            <router-view :height="wrapperHeight"></router-view>
        </div>
        <app-footer></app-footer>
        <go-top></go-top>
    </div>
</template>

<script type="text/babel">
    import top from 'vueView/common/header.vue';
    import footer from 'vueView/common/footer.vue';
    import goTop from 'vueView/components/gotop.vue'

    export default {
        props: ['showInfo'],

        data() {
            return {
                wrapperHeight: '',
                name: '家豪',
                age: 26
            }
        },
        components: {
            'app-header': top,
            'app-footer': footer,
            'go-top': goTop
        },
        mounted: function () {
            this.wrapperHeight = window.innerHeight - 80;
            var wrapper = document.getElementsByClassName('app-wrapper');
            // console.log(this.wrapperHeight);
            wrapper[0].style.minHeight = this.wrapperHeight + 'px';
            // console.log(wrapper[0].style.minHeight)
        },
        methods: {
            alertHi: function () {
                // console.log(this);
                //alert('正在向父组件传递...');
                this.$emit('ni-hao', this.$data)
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    @import "../../style/common/global";

    .app-wrapper {
        position: relative;
        margin: 15px;
        box-shadow: 0 0 2px $light-blue;
        padding: 5px;
        background-color: $dark-white;
    }
</style>