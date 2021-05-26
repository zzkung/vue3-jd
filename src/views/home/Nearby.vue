<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div v-for="item in nearbyList" :key="item.id" class="nearby__item">
      <img class="nearby__item__img" :src="item.imgUrl" alt="">
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.title}}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag"
            v-for="(innerItem, innerIndex) in item.tegs"
            :key="innerIndex"
          >{{innerItem}}</span>
        </div>
        <p class="nearby__content__highlight">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  data () {
    return {

    }
  },

  setup () {
    const nearbyList = [
      {
        id: 1,
        title: '沃尔玛',
        tegs: ['月售1万+', '起送￥0', '基础运费￥5'],
        desc: 'VIP尊享满89元减4元运费',
        imgUrl: 'https://img.alicdn.com/tfs/TB1FjZ7VWL7gK0jSZFBXXXZZpXa-520-280.png'
      }, {
        id: 2,
        title: '沃尔玛',
        tegs: ['月售1万+', '起送￥0', '基础运费￥5'],
        desc: 'VIP尊享满89元减4元运费',
        imgUrl: 'https://img.alicdn.com/tfs/TB1FjZ7VWL7gK0jSZFBXXXZZpXa-520-280.png'
      }
    ]
    return { nearbyList }
  },

  mounted () {},

  methods: {}
}

</script>

<style lang='scss' scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgcolor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      line-height: .18rem;
      margin-top: .08rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      line-height: .18rem;
      font-size: .13rem;
      color: #e93b3b;
      margin: .08rem 0 0;
    }
  }
}
</style>
