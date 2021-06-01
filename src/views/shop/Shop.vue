<template>
  <Search :left-arrow="true" placeholder="请输入商品名称" @click-left="handleBackClick" />
  <div class="wrapper">
    <ShopInfo
      :item="item"
      :border="false"
    />
    <Content />
    <Cart />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import Search from '../../components/Search'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content'
import Cart from './Cart'

const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 点击回退逻辑
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: { Search, ShopInfo, Content, Cart },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const { handleBackClick } = useBackRouterEffect()
    getItemData()
    return { item, handleBackClick }
  }
}

</script>

<style lang='scss' scoped>
.wrapper {
  padding: 0 .18rem;
}
</style>
