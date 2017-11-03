<template>
    <div class="login-wrapper">
        <div class="particles-wrapper">
            <div class="blur-wrapper"></div>
            <vue-particles
                    :color="particlesColor"
                    :particleOpacity="0.5"
                    :particlesNumber="20"
                    shapeType="star"
                    :particleSize="3"
                    :linesColor="particlesColor"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.4"
                    :linesDistance="100"
                    :moveSpeed="4"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="repulse">
            </vue-particles>
        </div>
        <div class="login-container">
            <div class="logo">
                <p>
                    You cannot improve your past, but you can improve your future.
                    <br/>
                    once time is wasted, life is wasted.
                </p>
                <!--<img :src="logo">-->
            </div>
            <div class="login">
                <div class="login-header">
                    <div class="login-bg"></div>
                </div>
                <div class="login-name">LOGIN</div>
                <el-input suffix-icon="el-icon-mobile-phone" size="small" type="text" placeholder="请输入账号"></el-input>
                <el-input suffix-icon="el-icon-view" size="small" type="password" placeholder="请输入密码"></el-input>
                <el-button type="primary" size="small" @click="login()">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import logo from '../style/img/logo.png'

    export default {
        components: {},
        data() {
            return {
                interView: null,
                particlesColor: '#fff',
                logo: logo
            }
        },
        mounted: function () {
            var wrapper = document.getElementsByClassName('login-wrapper')[0];
            var innerHeight = window.innerHeight - 120;
            wrapper.style.height = innerHeight + 'px';
            console.log(this.particlesColor);
            this.changeColor();
        },
        updated: function () {

        },
        methods: {
            login: function () {
                this.$router.push('home');
            },
            changeColor: function () {
                var that = this;
                that.interView = setInterval(function () {
                    that.particlesColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    console.log(that.particlesColor)
                }, 1000)
            }
        },
        beforeRouteLeave: function (to, from, next) {
            console.log(to);
            console.log(from);
            clearInterval(this.interView);
            next();
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    .particles-wrapper {
        background-image: url("./../style/img/1.jpg");
        background-size: cover;
        background-blend-mode: darken;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .blur-wrapper {
            background-image: url("./../style/img/1.jpg");
            background-size: cover;
            -webkit-filter: blur(2px);
            -moz-filter: blur(2px);
            -o-filter: blur(2px);
            -ms-filter: blur(2px);
            filter: blur(2px);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
        }
        #particles-js {
            position: relative;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 98%;
            z-index: 2;
        }
    }

    .login-wrapper {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        .login-container {
            position: relative;
            padding: 70px 0 30px 0;
            width: 92%;
            /*background: #000;*/
            min-width: 800px;
            text-align: center;
            /*z-index: 2;*/
            &:after {
                font-size: 24px;
                text-indent: 20px;
                color: rgba(102, 177, 255, 1);
                letter-spacing: 1px;
                line-height: 45px;
                background-image: url("./../style/img/1.jpg");
                background-size: cover;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                text-align: left;
                box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
                inset -2px -2px 5px rgba(0, 0, 0, 1),
                inset 0 45px 1px rgba(255, 255, 255, 1),
                inset 2px 0 5px rgba(0, 0, 0, 0.6);
                /*animation: myfirst 10s infinite alternate;*/
                /*-moz-animation: myfirst 10s infinite alternate; !* Firefox *!*/
                /*-webkit-animation: myfirst 10s infinite alternate; !* Safari 和 Chrome *!*/
                /*-o-animation: myfirst 10s infinite alternate; !* Opera *!*/
                z-index: -2;
            }
            .logo {
                /*max-width: 180px;*/
                /*height: 320px;*/
                /*justify-content: center;*/
                /*display: inline-flex;*/
                /*align-items: center;*/
                position: absolute;
                z-index: 2;
                p {
                    font-size: 18px;
                    font-family: fantasy;
                    letter-spacing: 2px;
                    color: #fff;
                    text-align: left;
                    line-height: 45px;
                }
                img {
                    width: 100%;
                }
            }
            .login {
                display: inline-block;
                vertical-align: bottom;
                width: 320px;
                margin-left: 50%;
                height: 450px;
                position: relative;
                padding: 10px 15px;
                box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
                border-radius: 4px;
                background: rgba(255, 255, 255, 0.2);
                z-index: 10;
                overflow: hidden;
                .login-bg {
                    background-image: url("./../style/img/1.jpg");
                    background-size: 100% 180%;
                    position: absolute;
                    left: -20px;
                    right: -20px;
                    top: -26px;
                    bottom: 330px;
                    z-index: 0;
                    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
                    transform: rotate(-9deg);
                    -ms-transform: rotate(-9deg); /* Internet Explorer */
                    -moz-transform: rotate(-9deg); /* Firefox */
                    -webkit-transform: rotate(-9deg); /* Safari 和 Chrome */
                    -o-transform: rotate(-9deg); /* Opera */
                }
                .login-name {
                    font-family: fantasy;
                    width: 80px;
                    height: 80px;
                    line-height: 80px;
                    background: rgba(102, 177, 255, 1);
                    color: #fff;
                    font-weight: bold;
                    letter-spacing: 1px;
                    border-radius: 100%;
                    margin: 72px auto 30px auto;
                    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
                    position: relative;
                    z-index: 1;
                }
                .el-button {
                    width: 88%;
                    position: absolute;
                    bottom: 20px;
                    margin: 10px;
                    left: 10px;
                }
                .el-input {
                    margin: 10px 0;
                }
                .el-input:nth-child(3) {
                    margin-top: 45px;
                }
            }
        }
    }

    @keyframes myfirst {
        0% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        50% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        75% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 1400px 0 5px rgba(255, 255, 255, 0.2);
        }
        100% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(255, 255, 255, 0.1);
        }
    }

    @-moz-keyframes myfirst /* Firefox */
    {
        0% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        50% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        75% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 1400px 0 5px rgba(255, 255, 255, 0.2);
        }
        100% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(255, 255, 255, 0.1);
        }
    }

    @-webkit-keyframes myfirst /* Safari 和 Chrome */
    {
        0% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        50% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        75% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 1400px 0 5px rgba(255, 255, 255, 0.2);
        }
        100% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(255, 255, 255, 0.1);
        }
    }

    @-o-keyframes myfirst /* Opera */
    {
        0% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        50% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 2px 0 5px rgba(0, 0, 0, 0.4);
        }
        75% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 1400px 1px rgba(255, 255, 255, 0.2),
            inset 1400px 0 5px rgba(255, 255, 255, 0.2);
        }
        100% {
            box-shadow: inset -2px -2px 1px rgba(255, 255, 250, 0.1),
            inset -2px -2px 5px rgba(0, 0, 0, 1),
            inset 0 10px 1px rgba(255, 255, 255, 0.1),
            inset 2px 0 5px rgba(255, 255, 255, 0.1);
        }
    }
</style>