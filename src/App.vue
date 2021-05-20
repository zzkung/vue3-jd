<template>
  <div class="wrapper">
    123
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
.wrapper {

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
