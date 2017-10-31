<template>
    <div class="app-wrapper" v-show="showInfo" @click="alertHi">
        <router-view :height="wrapperHeight"></router-view>
    </div>
</template>

<script type="text/babel">
    export default {
        props: ['showInfo'],

        data() {
            return {
                wrapperHeight: '',
                name: '家豪',
                age: 26
            }
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
    .app-wrapper{
        position: relative;
        margin: 15px;
        box-shadow: 0 0 2px $light-blue;
        padding: 5px;
    }
</style>