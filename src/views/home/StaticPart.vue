<template>
  <div class="position">
    <svg class="icon position__icon" aria-hidden="true">
      <use xlink:href="#icon-coordinates"></use>
    </svg>
    北京理工大学国防科技园2号楼10层
    <svg class="icon position__notice" aria-hidden="true">
      <use xlink:href="#icon-remind"></use>
    </svg>
  </div>
  <div class="search">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-search"></use>
    </svg>
    山姆会员商店优惠商品
  </div>
  <div class="banner">
    <img class="banner__img" src="https://img.alicdn.com/tfs/TB1FjZ7VWL7gK0jSZFBXXXZZpXa-520-280.png" alt="" />
  </div>
  <div class="icons">
    <div v-for="(item, index) in navList" :key="index" class="icons__item">
      <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgUrl}.png`" alt="">
      <p class="icons__item__desc">{{item.text}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  data () {
    return {

    }
  },

  setup () {
    const navList = [
      { id: 1, text: '超市便利', imgUrl: '超市' },
      { id: 2, text: '菜市场', imgUrl: '菜市场' },
      { id: 3, text: '水果店', imgUrl: '水果店' },
      { id: 4, text: '鲜花绿植', imgUrl: '鲜花' },
      { id: 5, text: '医药健康', imgUrl: '医药健康' },
      { id: 6, text: '家居时尚', imgUrl: '家居' },
      { id: 7, text: '烘培蛋糕', imgUrl: '蛋糕' },
      { id: 8, text: '签到', imgUrl: '签到' },
      { id: 9, text: '大牌免运', imgUrl: '大牌免运' },
      { id: 10, text: '红包套餐', imgUrl: '红包' }
    ]
    return { navList }
  },

  mounted () {},

  methods: {}
}

</script>

<style lang='scss' scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: .02rem;
    width: .2rem;
    height: .2rem;
  }
  .position__notice {
    position: absolute;
    top: .18rem;
    right: 0;
    width: .2rem;
    height: .2rem;
  }
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: $search-bgcolor;
  color: #b7b7b7;
  border-radius: .16rem;
  font-size: .14rem;
  .icon {
    display: inline-block;
    position: relative;
    top: .03rem;
    width: .22rem;
    height: .22rem;
    padding: 0 0 0 .12rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 53.85%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgcolor;
}
</style>
