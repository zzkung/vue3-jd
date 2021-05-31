<template>
  <div class="toast">{{message}}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Toast',
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({ show: false, toastMessage: '' })
  const showToast = (message) => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { show, toastMessage } = toRefs(toastData)
  return { show, toastMessage, showToast }
}
</script>

<style lang='scss' scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: .1rem;
  background: rgba($color: #000000, $alpha: .35);
  border-radius: .05rem;
  color: #fff;
}
</style>
