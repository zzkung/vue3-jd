import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {} // 第一层是商铺id，第二层是商品内容
  },
  mutations: {
    addItemToCart (state, payload) {
      const { shopId, productId, productInfo } = payload
      console.log(shopId, productId, productInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
