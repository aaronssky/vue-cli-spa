let _extend = function(o, key, extendFn, defaultFn) {
  console.info('_extend 扩展组件钩子事件 ' + key)
  if(typeof defaultFn !== 'function') {
  	defaultFn = function(){}
  }

  if (o[key] && typeof o[key] === 'function') {
  	defaultFn = o[key]
  }

  o[key] = function(){
  	// this : 组件实例 this
  	extendFn.apply(this,arguments)
  	defaultFn.apply(this,arguments)
  }
  return o
}
let o = {}
o.extendPageAutoScroll = o => {
  let defBeforeRouteEnter = (to, from, next) => {
    console.info('未自定义组件beforeRouteEnter钩子事件，执行默认扩展事件')
    next()
  }

  let extendBeforeRouteEnter = (to, from, next) => {
    console.log('执行组件路由钩子扩展事件--beforeRouteEnter')
    global['pagesScrollData'] = global['pagesScrollData'] || {}
    let timer = setInterval(function () {
      let [o, x, y] = [global['pagesScrollData'][to.fullPath], 0, 0]
      if (typeof o === 'object') {
        x = o.x || 0
        y = o.y || 0
      }
      global.scrollTo(x, y)
      if (global.scrollX === x && global.scrollY === y) {
        clearInterval(timer)
      } else {
      	console.log('trying to auto scroll')
      }
    }, 10)
  }

  o = _extend(o, 'beforeRouteEnter', extendBeforeRouteEnter, defBeforeRouteEnter)

  let defBeforeRouteLeave = (to, from, next) => {
    console.info('未自定义组件beforeRouteLeave钩子事件，执行默认扩展事件')
    next()
  }

  let extendBeforeRouteLeave = (to, from, next) => {
    global['pagesScrollData'] = global['pagesScrollData'] || {}
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    global['pagesScrollData'][from.fullPath] = {
      x: global.scrollX,
      y: global.scrollY
    }
  }

  // o.beforeRouteLeave = (to, from, next) => {
  //   global['pagesScrollData'] = global['pagesScrollData'] || {}
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   console.log('leave')
  //   console.log(from)
  //   global['pagesScrollData'][from.fullPath] = {
  //     x: global.scrollX,
  //     y: global.scrollY
  //   }
  //   next()
  // }

  o = _extend(o, 'beforeRouteLeave', extendBeforeRouteLeave, defBeforeRouteLeave)

  return o
}
module.exports = o