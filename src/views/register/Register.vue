<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" />
    <div class="wrapper__input">
      <input type="text" class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="请输入密码" />
    </div>
    <div class="wrapper__input">
      <input type="password" class="wrapper__input__content" placeholder="确认密码" />
    </div>
    <div class="wrapper__register-button">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已有账号去登录</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  data () {
    return {

    }
  },

  setup () {
    const router = useRouter()
    const handleLoginClick = () => {
      router.push({ name: 'Home' })
    }
    return { handleLoginClick }
  },

  mounted () {},

  methods: {}
}

</script>

<style lang='scss' scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    box-sizing: border-box;
    background: #f9f9f9;
    border: .01px solid rgba($color: #000000, $alpha: .1);
    border-radius: .06px;
    &__content {
      width: 100%;
      line-height: .48rem;
      outline: none;
      border: none;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: .32rem .4rem 0 .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 255, .32);
    border-radius: .04rem;
    color: #fff;
  }
  &__register-link {
    margin: .16rem;
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
