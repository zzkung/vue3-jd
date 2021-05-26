<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
    <Docker />
  </div>
  <div class="docker-height"></div>
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss">
@import '../../style/mixins.scss';
@import '../../style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}
.docker-height {
  height: $docker-height;
  margin-top: .3rem;
}
</style>
