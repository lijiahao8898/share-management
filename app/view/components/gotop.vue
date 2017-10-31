<template>
    <div class="go-top">
        <i class="el-icon-caret-top" @click="goTop()"></i>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                interValue: null,
                topValue: 0,
                animate: null
            }
        },
        mounted: function () {
            this.handleScroll()
        },
        methods: {
            handleScroll: function () {
                var that = this;
                window.onscroll = function () {
                    if (!that.interValue) {
                        that.interValue = setInterval(function () {
                            that.topValue = document.documentElement.scrollTop || document.body.scrollTop;
                            that.isScrolling();
                        }, 500);
                    }
                }
            },
            isScrolling: function () {
                const currentValue = document.documentElement.scrollTop || document.body.scrollTop;
                const top = document.getElementsByClassName('go-top')[0];
                if (currentValue === this.topValue) {
                    if (this.interValue) {
                        clearInterval(this.interValue);
                        this.interValue = null;
                        if (currentValue > 100) {
                            this.show(top);
                        } else {
                            this.hide(top);
                        }
                    }
                }
            },
            hasClass: function (obj, name) {
                return obj.className.match(new RegExp('(\\s|^)' + name + '(\\s|$)'));
            },
            addClass: function (obj, name) {
                if (!this.hasClass(obj, name)) {
                    obj.className += " " + name;
                }
            },
            removeClass: function (obj, name) {
                if (this.hasClass(obj, name)) {
                    var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
                    obj.className = obj.className.replace(reg, ' ');
                }
            },
            goTop: function () {
                window.scrollTo(0, 0);
            },
            hide: function (target) {
                let i = 10;
                var that = this;
                if (that.animate) {
                    return;
                }
                that.animate = setInterval(function () {
                    i--;
                    target.style.opacity = i / 10;
                    if (i <= 0) {
                        clearInterval(that.animate);
                        that.animate = null;
                        target.style.display = 'none';
                        that.removeClass(target, 'show');
                    }
                }, 60)
            },
            show: function (target) {
                let i = 0;
                var that = this;
                if (that.animate || that.hasClass(target, 'show')) {
                    return;
                }
                that.animate = setInterval(function () {
                    i++;
                    target.style.display = 'block';
                    target.style.opacity = i / 10;
                    if (i >= 10) {
                        clearInterval(that.animate);
                        that.animate = null;
                        that.addClass(target, 'show')
                    }
                }, 60)
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped="">
    .go-top {
        position: fixed;
        right: 30px;
        bottom: 30px;
        display: none;
        cursor: pointer;
        transition: display 2s;
        i {
            font-size: 20px;
            text-align: center;
            line-height: 40px;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background: #fff;
            color: #409eff;
            box-shadow: 0 0 10px rgba(64, 158, 225, 0.5);
        }
    }
</style>