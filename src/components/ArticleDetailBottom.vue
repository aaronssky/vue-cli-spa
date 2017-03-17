<template>
  <div class="Component-ArticleDetailBottom">
    <div class="bottom-floating">
      <div class="tab">
        <div class="tab-item" @click="goBackPage"><i class="iconfont icon-arrow-back"></i></div>
        <div class="tab-item" @click="goNextArticle"><i class="iconfont icon-xiajiantou"></i></div>
        <div :class="settings.isUp?'tab-item active':'tab-item'" @click="clickUp">
          <i class="iconfont icon-dianzan"></i>
          <span class="up-count">{{settings.upCount}}</span>
          <div :class="showUpAni?'up-animation active':'up-animation'">
            <div class="row now" v-html="rowNowHtml">
            </div>
            <div class="row after" v-html="rowAfterHtml">
            </div>
          </div>
        </div>
        <div class="tab-item"><i class="iconfont icon-shoucang"></i></div>
        <div class="tab-item" @click="goArticleComment">
          <i class="iconfont icon-xiaoxi"></i>
          <span class="comment-count up-count">123</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 组件传入参数说明
 * settings = {
 *   title: '标题',
 *   isNavPages: false, //默认不传递，导航页面传递:true，隐藏返回按钮
 *   componentHide: false //默认不传递，导航页面传递:true,隐藏顶部导航
 * }
 */
export default {
  props: {settings: {
    default: () => ({})
  }},
  data () {
    return {
      upAnimationClass: 'up-animation',
      rowNowHtml: '',
      rowAfterHtml: '',
      showUpAni: false
    }
  },
  mounted () {
    console.log('初始化组件-ArticleDetailBottom')
  },
  methods: {
    goBackPage () {
      this.$router.push('/TabFound')
    },
    goNextArticle () {
      document.querySelector('.page-content').scrollTop = 0
      this.$router.push('/ArticleDetail?id=' + this.settings.nextId)
      console.log(this.$router)
    },
    clickUp () {
      this.setRowNowHtml()
      setTimeout(() => {
        this.showUpAni = true
        this.settings.isUp = true
        console.log(111111111111111111)
        setTimeout(() => {
          this.settings.upCount++
          this.showUpAni = false
        }, 850)
      }, 100)
    },
    setRowNowHtml () {
      let returnHtml = (count, flag = 0) => {
        count = count.toString()
        if (flag === 0) {
          return count.replace(/\d{1}/g, function ($1) {
            return '<span class="updated">' + $1 + '</span>'
          })
        } else {
          let origin = count.slice(0, count.length - flag)
          let updated = count.slice(count.length - flag)
          let str = origin.replace(/\d{1}/g, function ($1) {
            return '<span>' + $1 + '</span>'
          })
          return str + returnHtml(updated)
        }
      }
      let nowCount = ~~this.settings.upCount
      let afterCount = nowCount + 1
      nowCount = nowCount.toString()
      afterCount = afterCount.toString()
      if (afterCount.length !== nowCount.length) {
        this.rowNowHtml = returnHtml(nowCount)
        this.rowAfterHtml = returnHtml(afterCount)
      } else {
        let flag = 0
        for (var i = afterCount.length - 1; i >= 0; i--) {
          if (afterCount[i] !== nowCount[i]) {
            flag++
          }
        }
        console.log(flag)
        this.rowNowHtml = returnHtml(nowCount, flag)
        this.rowAfterHtml = returnHtml(afterCount, flag)
      }
    },
    goArticleComment () {
      this.$router.push('/ArticleComment?id=' + this.settings.articleId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@mixin prefix($property, $value){
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    #{$property}: $value;
}
$bottomFloatingHeight: 0.9375rem;
$pagePadding: 0.25rem;


.Component-ArticleDetailBottom {
  height: $bottomFloatingHeight;
  background-color: rgba(0,0,0,0);
  color: #444;
  .bottom-floating{
    line-height: $bottomFloatingHeight;
    height: $bottomFloatingHeight;
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0;
    background-color: rgba(250,250,250,1);
  }

  
  .rotate180{
    @include prefix(transform, rotate(180deg));
  }

  .iconfont{
    display: inline-block;
    font-size: 0.7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    @include prefix(transform, translate(-50%,-50%))
  }

  .icon-arrow-back{
    font-size: 0.5rem;
    font-weight: bold;
  }

  .icon-dianzan{
    font-size: 0.45rem;
  }

  .icon-shoucang{
    font-size: 0.5rem;
  }

  .icon-xiaoxi{
    font-size: 0.45rem;
  }

  .bottom-floating:before{
    position: absolute;
    height: 1px;
    width: 100%;
    display: inline-block;
    top: -1px;
    left: 0;
    background-color: #dedede;
    content: "";
  }

  .tab{
    position: relative;
    font-size: 0;
    height: 100%;

    .tab-item.active{
      color: rgba(4,185,247,1)
    }

    .tab-item{
      display: inline-block;
      width: 20%;
      font-size: 0.5rem;
      text-align: center;
      position: relative;
      height: 100%;

      .up-count{
        position: absolute;
        font-size: 0.2rem;
        top: 0.08rem;
        left: 1.25rem;
        line-height: 0.3rem;
      }

      .comment-count{
        color: #fff;
        position: absolute;
        display: inline-block;
        background-color: #04b9f7;
        width: 0.6rem;
        line-height: 0.3rem;
        left: 50%;
      }

      .up-animation{
        position: absolute;
        top:0;
        left: 50%;
        display: inline-block;
        color: #fff;
        width: 100%;
        border-radius: .15rem;
        height: 0.8rem;
        line-height: 0.8rem;
        background-color: rgba(4,185,247,0.9);
        @include prefix(transform, translate(-50%,0) scale(0));
        @include prefix(transition, all 0.3s ease);

        .row{
          font-size: 0;
          height: 100%;
        }

        .row span{
          font-size: 0.4rem;
          display: inline-block;
          height: 100%;
          @include prefix(transition, all 0.3s ease);
          @include prefix(transition-delay, 0.4s);
          opacity: 1;
        }

        .row.after span{
          opacity: 0;
        }

      }

      .up-animation.active{
        @include prefix(transform, translate(-50%,-1rem) scale(1));
        .row span.updated{
          @include prefix(transform, translateY(-100%));
        }

        .row.now span.updated{
          opacity: 0;
        }

        .row.after span.updated{
          opacity: 1;
        }
      }
    }
  }

  
}

</style>
