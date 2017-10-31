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
    </div>
</template>

<script type="text/babel">
    import logo from '../../style/img/logo.png'

    export default {
        data() {
            return {
                logo: logo,
                isLogin: true,
                active: "/spread",
                "nav": [
                    {
                        id: 1,
                        name: "营销工具",
                        link: "/marketing-tool"
                    },
                    {
                        id: 2,
                        name: "推广",
                        link: "/spread"
                    },{
                        id: 3,
                        name: "登录",
                        link: '/login'
                    }
                ]
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
    }
</style>