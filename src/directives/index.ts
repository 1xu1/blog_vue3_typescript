import Time from '@/directives/modules/time'
export default (app: any) => {
    app.directive("time", {
        bind: function (el: any, binding: any) {
            el.innerHTML = Time.getFormatTime(binding.value);
            el.__timeout__ = setInterval(function () {
                el.innerHTML = Time.getFormatTime(binding.value);
            }, 6000);
        },
        unbind: function (el: any) {
            clearInterval(el.__timeout__);
            delete el.__timeout__;
        },
    });
}