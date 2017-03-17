<template>
  <!-- 这是 ArticleComment.vue -->
  <div class="page Page-ArticleComment" id="ArticleComment">
    <TopFloating :settings="topFloatingSettings"></TopFloating>
    <div class="page-content">
      <div class="item-list">
        <div class="item" @mouseover="ab">
          <div class="item-content">
            <img class="avatar" src="http://iusystem.bj.bcebos.com/ae7bcc55408566f525aa02e706937485.jpg"/>
            <div class="reply-info">
              <div class="reply-top">
                <span class="user-name">盈盈</span>
                <span class="up-count"><i class="iconfont icon-iconfontpraise"></i>0</span>
              </div>
              <div class="reply-content">
                直到最近，突然看到还留着一片空白的墙，我就一直在想：为什么不发挥一下拆机强项，把旧手机都拆掉做成标本呢？如果拆完还能做得好看，正好一举两得。
              </div>
              <div class="reply-bottom">
                02-28 15:30
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ArticleCommentBottom></ArticleCommentBottom>
  </div>
</template>

<script>
import TopFloating from './../components/TopFloating'
import ArticleCommentBottom from './../components/ArticleCommentBottom'
import pageExtend from './../../static/js/lib/pageExtend.js'

let compnnentData = {
  components: {TopFloating, ArticleCommentBottom},
  data () {
    return {
      queryId: '',
      topFloatingSettings: {
        title: '33条点评',
        hiddenBackArrow: true
      }
    }
  },
  mounted () {
    console.log('钩子事件：mounted - ' + this.$router.history.current.fullPath)
  },
  beforeRouteUpdate (to, from, next) {
    // 用以同一个路由，但动态参数或者query参数修改刷新组件
    // 在当前路由改变，但是改组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.queryId = to.query.id
    next() // 注：若去掉会导致url上切换其他id值，再切回当前记录的id值，会不触发该事件
  },
  activated () {
    // 用以keep-alive的组件刷新事件
    this.queryId = this.$router.history.current.query.id
    console.log('钩子事件：activated - ' + this.$router.history.current.fullPath)
  },
  deactivated () {
    // keep-alive 组件停用时调用。
    console.log('钩子事件：deactivated - ' + this.$router.history.current.fullPath)
  },
  methods: {
    ab () {
      window.alert(111)
    }
  }
}

compnnentData = pageExtend.extendAreaAutoScroll(compnnentData, {
  el: '#ArticleComment .page-content',
  setElHeight: function () {
    // 注意此处若用箭头函数，会导致this指向组件data变量
    console.warn(this)
    let $$ = selector => {
      let o = document.querySelectorAll(selector)
      if (o && o.length >= 1) {
        return o[0]
      }
      return o
    }
    let topH = $$('#ArticleComment .Component-TopFloating').offsetHeight
    let winH = document.documentElement.clientHeight
    let bottomH = $$('#ArticleComment .Component-ArticleCommentBottom').offsetHeight
    return (winH - (topH || 0) - (bottomH || 0) - 1) + 'px'
  }
})
export default compnnentData
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}

.Page-ArticleComment{
  .Component-TopFloating .top-floating{
    background-color: #2fa1f3;
  }

  .item-list{
    position: relative;

    .item{
      padding-top: 0.375rem;
      padding-bottom: 0.3rem;
      position: relative;
      
      .item-content{
        position: relative;
        padding-left: 1.3rem;
        padding-right: 0.375rem;
        .avatar{
          position: absolute;
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 100%;
          left: 0.375rem;
        }

        .reply-info{
          
          .reply-top{

            .user-name{
              color: #000;
            }

            .up-count{
              float: right;
              color: #b6b6b6;

              .icon-iconfontpraise{
                font-size: 0.4rem;
                vertical-align: 0.03rem;
              }
            }
          }

          .reply-content{
            color: #333;
            line-height: 0.5rem;
            margin-top: 0.1rem;
          }

          .reply-bottom{
            margin-top: 0.32rem;
            font-size: 0.32rem;
            color: grey;
          }
        }
      }/*endof item-content*/
    }/*endof item*/
    
    .item:after{
      content: "";
      height: 1px;
      width: 100%;
      background-color: #dedede;
      position: absolute;
      bottom: 0;
      left: 0;
      @include prefix(transform, scaleY(0.5));
    }
  }
}
</style>
