<template>
    <div class="header">
        <div class="header-logo">
            <!--<img :src="logo">-->
        </div>
        <el-menu class="header-menu" :default-active="active" background-color="#409eff" text-color="#fff"
                 active-text-color="#ffd04b"
                 mode="horizontal"
                 :router="true">
            <el-menu-item :index="item.link" v-for="(item, index) in nav" :key="item.id">
                {{ item.name }}
            </el-menu-item>
        </el-menu>
        <div class="user-info" @click="logout()">
            退出
        </div>
    </div>
</template>

<script type="text/babel">
    import logo from '../../style/img/logo.png'
    import cookie from '../../src/util/cookie';

    export default {
        data() {
            return {
                logo: logo,
                isLogin: true,
                active: "spread",
                "nav": [
                    {
                        id: 1,
                        name: "营销",
                        link: "marketing-tool"
                    },
                    {
                        id: 2,
                        name: "推广",
                        link: "spread"
                    }
                ]
            }
        },
        methods: {
            logout: function () {
                cookie.delete('token');
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    .header {
        height: 60px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background: #409eff;
        .header-logo {
            display: inline-block;
            vertical-align: top;
            img {
                width: 40px;
                margin: 10px 0 0 10px;
            }
        }
        ul.header-menu {
            display: inline-block;
            border: none;
            margin-left: 10px;
            li:hover{
                background-color: #52ceff!important;
            }
        }
        .user-info{
            display: inline-block;
            float: right;
            height: 60px;
            line-height: 60px;
            width: 68px;
            text-align: center;
            color: #fff;
            cursor: pointer;
            transition: background-color .3s;
            &:hover{
                background-color: #52ceff;
            }
        }
    }
</style>