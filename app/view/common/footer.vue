<template>
    <div class="footer">
        <p>{{ name }}</p>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                name: '分享汇提供技术支持'
            }
        }
    }
</script>

<style lang="scss" scoped="" type="text/scss">
    @import "../../style/common/global";
    .footer{
        background: $white;
        p{
            text-align: center;
            font-size: 12px;
            color: $black;
            padding: 5px;
        }
    }
</style>