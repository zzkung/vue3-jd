<template>
  <div class="search">
    <svg v-if="leftArrow" class="icon icon__left" aria-hidden="true" @click="onIconLeftClick">
      <use xlink:href="#icon-return"></use>
    </svg>
    <div class="search__content">
      <svg class="icon icon__search" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
      <input
        type="text"
        class="search__content__input"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    leftArrow: { // 是否显示左侧图标
      type: Boolean,
      default: false
    },
    placeholder: String // 占位提示文字
  },
  emits: ['clickLeft'],
  setup (props, context) {
    const onIconLeftClick = () => {
      context.emit('clickLeft')
    }
    return { onIconLeftClick }
  }
}

</script>

<style lang='scss' scoped>
@import '../style/viriables.scss';
.search {
  display: flex;
  align-items: center;
  margin: .14rem .15rem .04rem;
  .icon__left {
    width: .25rem;
    height: .25rem;
    margin-left: -.03rem;
    margin-right: .05rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    align-items: center;
    flex: 1;
    background: $search-bgcolor;
    border-radius: .16rem;
    .icon__search {
      width: .24rem;
      height: .24rem;
      margin: 0 .03rem 0 .08rem;
      color: $search-fontcolor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
