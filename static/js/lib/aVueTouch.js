;
(function() {

    var vueTouch = {
        onTap: function(el, binding) {
            var startTx, startTy, endTx, endTy, _arguments = arguments;
            el.addEventListener("touchstart", function(e) {
                var touch = e.touches[0];
                startTx = touch.clientX;
                startTy = touch.clientY;

            }, false);
            el.addEventListener("touchend", function(e) {
                var touch = e.changedTouches[0];
                endTx = touch.clientX;
                endTy = touch.clientY;
                if (Math.abs(startTx - endTx) < 6 && Math.abs(startTy - endTy) < 6) {
                    // var method = binding.value.method;
                    // var arguments = binding.value.arguments.concat([el]);
                    // method.apply({}, arguments);
                    runMethod.apply({}, _arguments);
                }
            }, false);
        }
    }

    function runMethod(el, binding) {
        var method = binding.value.method;
        var arguments = binding.value.arguments.concat([el]);
        method.apply({}, arguments);
    }

    vueTouch.install = function(Vue, options) {
        options = options || {};
        var AlloyFinger = window.AlloyFinger || options.AlloyFinger;
        if (!AlloyFinger) {
            throw new Error('you need include the AlloyFinger!');
        }
        Vue.directive('touch', {

            isFn: true,
            acceptStatement: true,

            bind: function(el, binding) {
                var _arguments = arguments;
                window.af = new AlloyFinger(el, {})
                af.on(binding.arg, function() {
                        runMethod.apply({}, _arguments);
                    })
                    //vueTouch.onTap.apply(this, arguments)
                console.log(binding)
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
