<template>
    <div class="app-wrapper" v-show="showInfo" @click="alertHi">
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    export default {
        props: ['showInfo'],

        data() {
            return {
                name: '家豪',
                age: 26
            }
        },

        methods: {
            alertHi: function () {
                console.log(this);
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
        min-height: 600px;
        margin: 15px;
        box-shadow: 0 0 2px $light-blue;

    }
</style>