<template>
  <div class="mask" v-if="showCart" @click="handleCartShowChange"></div>
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <svg class="product__item__checked icon" aria-hidden="true">
            <use :xlink:href="allChecked ? '#icon-success_fill' : '#icon-success'"></use>
          </svg>
          全选
        </div>
        <div
          class="product__header__clear"
          @click="() => cleanCartProducts(shopId)"
        >清空购物车</div>
      </div>
      <template
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product__item" v-if="item.count > 0">
          <svg class="product__item__checked icon" aria-hidden="true" @click="() => changeCartItemChecked(shopId, item._id)">
            <use :xlink:href="item.check ? '#icon-success_fill' : '#icon-success'"></use>
          </svg>
          <img class="product__item__img" :src="item.imgUrl" alt="">
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product__number">
            <span class="product__number__minus" @click="() => { changeCartItemInfo(shopId, item._id, item, -1) }">-</span>
            {{item.count || 0}}
            <span class="product__number__plus" @click="() => { changeCartItemInfo(shopId, item._id, item, 1) }">+</span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="" @click="handleCartShowChange" />
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{ name: 'Home' }">去结算</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

// 购物车逻辑
const useCartEffect = (shopId) => {
  const { changeCartItemInfo } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.check) {
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2)
  })
  const allChecked = computed(() => {
    const productList = cartList[shopId]
    let result = true
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        if (product.count > 0 && !product.check) {
          result = false
        }
      }
    }
    return result
  })

  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }
  return { total, price, productList, cleanCartProducts, allChecked, changeCartItemInfo, changeCartItemChecked, setCartItemsChecked }
}

// 展示隐藏购物车逻辑
const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShowChange }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList, cleanCartProducts, allChecked, changeCartItemInfo, changeCartItemChecked, setCartItemsChecked } = useCartEffect(shopId)
    const { showCart, handleCartShowChange } = toggleCartEffect()
    return { total, price, shopId, productList, cleanCartProducts, allChecked, changeCartItemInfo, changeCartItemChecked, setCartItemsChecked, showCart, handleCartShowChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: .5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: $white;
  z-index: 2;
}
.product {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  background: $white;
  &__header {
    display: flex;
    justify-content: space-between;
    line-height: .52rem;
    border-bottom: .01rem solid $content-bgcolor;
    font-size: .14rem;
    color: $content-fontcolor;
    &__all {
      display: flex;
      align-items: center;
      margin-left: .16rem;
    }
    &__clear {
      margin-right: .16rem;
      text-align: right;
    }
  }
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgcolor;
    &__checked {
      color: #0091ff;
      width: .25rem;
      height: .25rem;
      margin-right: .1rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis
    }
    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $danger;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__minus,
      &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        background: #0091ff;
        color: $white;
        margin-left: .05rem;
      }
    }
  }
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgcolor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      top: .04rem;
      left: .45rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background: $danger;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: $white;
      transform: scale(.8);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      color: $danger;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background: #4fb0f9;
    text-align: center;
    color: $white;
    font-size: .14rem;
    a {
      color: $white;
      text-decoration: none;
    }
  }
}
</style>
