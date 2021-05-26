<template>
  <div class="docker">
    <div v-for="(item, index) in dockerList" :key="item.icon" :class="['docker__item', index == 0 ? 'docker__item--active' : '']">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="item.icon"></use>
      </svg>
      <div class="docker__title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  data () {
    return {

    }
  },

  setup () {
    const dockerList = [
      {
        icon: '#icon-home', text: '首页'
      }, {
        icon: '#icon-service', text: '购物车'
      }, {
        icon: '#icon-createtask', text: '订单'
      }, {
        icon: '#icon-people', text: '我的'
      }
    ]
    return { dockerList }
  },

  mounted () {},

  methods: {}
}

</script>

<style lang='scss' scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.docker {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid $content-bgcolor;
  box-sizing: border-box;
  background: $white;
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
