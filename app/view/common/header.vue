<template>
    <div class="header">
        <el-menu theme="dark" :default-active="active" class="el-menu-demo" mode="horizontal" :router="true">
            <el-menu-item :index="item.link" v-for="(item, index) in nav" :key="item.id">
                {{ item.name }}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                isLogin: true,
                active: "/marketing-tool",
                "nav": [
                    {
                        id: 1,
                        name: "营销工具",
                        link: "/marketing-tool"
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">

</style>