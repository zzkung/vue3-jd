<template>
  <div class="wrapper">
    <div class="position">
      <svg class="icon position__icon" aria-hidden="true">
        <use xlink:href="#icon-coordinates"></use>
      </svg>
      北京理工大学国防科技园2号楼10层
      <svg class="icon position__notice" aria-hidden="true">
        <use xlink:href="#icon-remind"></use>
      </svg>
    </div>
  </div>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-home"></use>
      </svg>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-service"></use>
      </svg>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-createtask"></use>
      </svg>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-people"></use>
      </svg>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/mixins.scss';
.wrapper {
  padding: 0 .18rem;
}
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
.docker {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid #f1f1f1;
  box-sizing: border-box;
  &__item {
    flex: 1;
    text-align: center;
    .icon {
      width: 2em;
      height: 2em;
      margin: .07rem 0 .02rem 0;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
