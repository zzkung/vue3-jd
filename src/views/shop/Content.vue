<template>
  <div class="content">
    <div class="category">
      <div class="category__item">全部商品</div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}

</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.44rem;
  bottom: .5rem;
}
.category {
  width: .76rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: $search-bgcolor;
  &__item {
    // height: ;
  }
}
</style>
