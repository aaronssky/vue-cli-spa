var exp = (function(exp) {
    var _extend = function(o, key, extendFn, defaultFn) {
        console.info('_extend 扩展组件钩子事件 ' + key)
        if (typeof defaultFn !== 'function') {
            defaultFn = function() {}
        }

        if (o[key] && typeof o[key] === 'function') {
            defaultFn = o[key]
        }

        o[key] = function() {
            // this : 组件实例 this
            extendFn.apply(this, arguments)
            defaultFn.apply(this, arguments)
        }
        return o
    }
    exp.extendPageAutoScroll = function(o) {

        var timer

        var defBeforeRouteEnter = function(to, from, next) {
            console.info(to.fullPath + ' 未自定义组件beforeRouteEnter钩子事件，执行默认扩展事件')
            next()
        }

        var extendBeforeRouteEnter = function(to, from, next) {
            console.info(to.fullPath + ' 执行组件路由钩子扩展事件--beforeRouteEnter')
            window['pagesScrollData'] = window['pagesScrollData'] || {}
            timer = setInterval(function() {
                var o = window['pagesScrollData'][to.fullPath],
                    x = 0,
                    y = 0;
                if (typeof o === 'object') {
                    x = o.x || 0
                    y = o.y || 0
                }
                window.scrollTo(x, y)
                if (window.scrollX === x && window.scrollY === y) {
                    clearInterval(timer)
                } else {
                    console.warn('trying to auto scroll')
                }
            }, 10)
        }

        o = _extend(o, 'beforeRouteEnter', extendBeforeRouteEnter, defBeforeRouteEnter)

        var defBeforeRouteLeave = function(to, from, next) {
            console.info(from.fullPath + ' 未自定义组件beforeRouteLeave钩子事件，执行默认扩展事件')
            next()
        }

        var extendBeforeRouteLeave = function(to, from, next) {
            window['pagesScrollData'] = window['pagesScrollData'] || {}
                // 导航离开该组件的对应路由时调用
                // 可以访问组件实例 `this`
            window['pagesScrollData'][from.fullPath] = {
                x: window.scrollX,
                y: window.scrollY
            }
        }

        o = _extend(o, 'beforeRouteLeave', extendBeforeRouteLeave, defBeforeRouteLeave)

        return o
    }

    exp.extendAreaAutoScroll = function(o, options) {

        options = options || {}
        options.el = options.el || '.page-content'

        var timer

        function $$(selector) {
            var o = document.querySelectorAll(selector)
            if (o && o.length >= 1) {
                return o[0]
            }
            return o
        }

        var defBeforeRouteEnter = function(to, from, next) {
            console.info(to.fullPath + '未自定义组件beforeRouteEnter钩子事件，执行默认扩展事件')
            next()
        }

        var extendBeforeRouteEnter = function(to, from, next) {
            console.info(to.fullPath + '执行组件路由钩子扩展事件--beforeRouteEnter')
            window['pagesContScrollData'] = window['pagesContScrollData'] || {}
            var scrollData = window['pagesContScrollData'][to.fullPath]
            if (scrollData) {
                timer = setInterval(function() {
                    var obj = document.querySelector(options.el)
                    if (obj) {
                        // obj.scrollTop = scrollData['y']
                        // clearInterval(timer)
                        if(obj.scrollTop == scrollData['y']){
                            clearInterval(timer)
                        }else {
                            obj.scrollTop = scrollData['y']
                        }
                        console.warn(to.fullPath + ' 路由找到.page-content元素，尝试自动定位到记录坐标')
                    }else{
                        console.warn(to.fullPath + ' 路由未渲染或者没找到.page-content元素，重试')
                    }
                }, 10)
            }
        }

        o = _extend(o, 'beforeRouteEnter', extendBeforeRouteEnter, defBeforeRouteEnter)

        var defBeforeRouteLeave = function(to, from, next) {
            console.info(from.fullPath + ' 未自定义组件beforeRouteLeave钩子事件，执行默认扩展事件')
            next()
        }

        var extendBeforeRouteLeave = function(to, from, next) {
            clearInterval(timer)
            var obj = document.querySelector(options.el)
            if (obj) {
                window['pagesContScrollData'] = window['pagesContScrollData'] || {}
                window['pagesContScrollData'][from.fullPath] = {
                    x: 0,
                    y: obj.scrollTop
                }
            } else {
                console.warn(from.fullPath + '未渲染或者没找到.page-content元素，routeLeave 无法设置偏移值')
            }
        }

        o = _extend(o, 'beforeRouteLeave', extendBeforeRouteLeave, defBeforeRouteLeave)

        if (typeof options.setElHeight === 'function') {
            o = _extend(o, 'mounted', function() {
                // this 指向组件实例
                document.querySelector(options.el).style.height = options.setElHeight.call(this)
            })
        }

        return o
    }

    return exp

})(typeof window.exp === 'object' ? window.exp : {})

module.exports = exp
