<template>
    <div class="footer">
        <p>{{ name }}</p>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                name: '杭州纷享汇电子商务有限公司提供技术支持'
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    @import "../../style/common/global";
    .footer{
        background: $white;
        min-height: 60px;
        line-height: 60px;
        background: #f8f9fb;
        letter-spacing: 1px;
        p{
            text-align: center;
            font-size: 12px;
            color: $black;
            padding: 5px;
        }
    }
</style>