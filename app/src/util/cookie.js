export default {
    // 添加cookie
    set: function (name, value, days) {
        var d = new Date();
        var time = days ? 24 * 60 * 60 * 1000 * days : 24 * 60 * 60 * 1000;
        d.setTime(d.getTime() + time);
        window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();

    },
    // 获取cookie
    get: function (name) {
        var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    },
    // 删除cookie
    delete: function (name) {
        this.set(name, '', -1);
    }
}