;
(function() {

    var vueTouch = {}

    vueTouch.install = function(Vue) {
        Vue.directive('touch', {

            isFn: true,
            acceptStatement: true,

            bind: function(el, binding) {
                console.log(binding)

                var startTx, startTy, endTx, endTy;
                el.addEventListener("touchstart", function(e) {
                    var touch = e.touches[0];
                    startTx = touch.clientX;
                    startTy = touch.clientY;
                    console.log(binding)

                }, false);
                el.addEventListener("touchend", function(e) {
                    var touch = e.changedTouches[0];
                    endTx = touch.clientX;
                    endTy = touch.clientY;
                    if (Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6) {
                        var method = binding.value.method;
                        var params = binding.value.params;
                        // method(params);
                    }
                }, false);
                console.log(binding)
                // console.log(binding.value())
            },

            update: function(fn) {
                console.log(4444)

            },

            unbind: function() {

            }
        })
    }

    if (typeof exports == "object") {
        module.exports = vueTouch
    } else if (typeof define == "function" && define.amd) {
        define([], function() {
            return vueTouch
        })
    } else if (window.Vue) {
        window.VueTouch = vueTouch
        Vue.use(vueTouch)
    }

})();
