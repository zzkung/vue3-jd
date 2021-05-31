<template>
  <div class="toast">{{message}}</div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['message']
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
