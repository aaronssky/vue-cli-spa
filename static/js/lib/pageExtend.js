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
var o = {}
o.extendPageAutoScroll = function(o) {
    var defBeforeRouteEnter = function(to, from, next) {
        console.info('未自定义组件beforeRouteEnter钩子事件，执行默认扩展事件')
        next()
    }

    var extendBeforeRouteEnter = function(to, from, next) {
        console.log('执行组件路由钩子扩展事件--beforeRouteEnter')
        window['pagesScrollData'] = window['pagesScrollData'] || {}
        var timer = setInterval(function() {
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
                console.log('trying to auto scroll')
            }
        }, 10)
    }

    o = _extend(o, 'beforeRouteEnter', extendBeforeRouteEnter, defBeforeRouteEnter)

    var defBeforeRouteLeave = function(to, from, next) {
        console.info('未自定义组件beforeRouteLeave钩子事件，执行默认扩展事件')
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

    // o.beforeRouteLeave = (to, from, next) => {
    //   window['pagesScrollData'] = window['pagesScrollData'] || {}
    //   // 导航离开该组件的对应路由时调用
    //   // 可以访问组件实例 `this`
    //   console.log('leave')
    //   console.log(from)
    //   window['pagesScrollData'][from.fullPath] = {
    //     x: window.scrollX,
    //     y: window.scrollY
    //   }
    //   next()
    // }

    o = _extend(o, 'beforeRouteLeave', extendBeforeRouteLeave, defBeforeRouteLeave)

    return o
}
module.exports = o
