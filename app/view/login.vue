<template>
    <div class="login-wrapper">
        <div class="login-container">
            <div class="logo">
                <img :src="logo">
            </div>
            <div class="login">
                <div class="line"></div>
                <el-input suffix-icon="el-icon-mobile-phone" size="small" type="text" placeholder="请输入账号"></el-input>
                <el-input suffix-icon="el-icon-view" size="small" type="password" placeholder="请输入密码"></el-input>
                <el-button type="primary" size="small" @click="login()">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import logo from '../style/img/logo.png'
    import ElInput from "../../node_modules/element-ui/packages/input/src/input.vue";
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        components: {
            ElButton,
            ElInput
        },
        data() {
            return {
                logo: logo
            }
        },
        mounted: function () {
            var wrapper = document.getElementsByClassName('login-wrapper')[0];
            var innerHeight = window.innerHeight - 100;
            wrapper.style.height = innerHeight + 'px';
        },
        methods: {
            login: function () {
                this.$router.push('home');
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    .login-wrapper {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        .login-container{
            padding: 50px 0;
            width: 100%;
            background: #edf2fc;
            min-width: 800px;
            text-align: center;
            box-shadow: 1px 1px 10px rgba(0,0,0,0.2) inset;
            .line{
                width: 100%;
                height: 1px;
                border-bottom: 1px solid #fff;
                margin: 20px 0;
            }
            .logo {
                max-width: 180px;
                height: 320px;
                justify-content: center;
                display: inline-flex;
                align-items: center;
                img {
                    width: 100%;
                }
            }
            .login {
                display: inline-block;
                vertical-align: bottom;
                width: 320px;
                height: 320px;
                margin-left: 240px;
                position: relative;
                padding: 10px;
                box-shadow: 0 0 5px rgba(0,0,0,0.2);
                border-radius: 4px;
                background: #fff;
                .el-button {
                    width: 88%;
                    position: absolute;
                    bottom: 20px;
                    margin: 10px;
                    left: 10px;
                }
                .el-input {
                    margin-bottom: 15px;
                }
            }
        }
    }
</style>