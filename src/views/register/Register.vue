<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" />
    <div class="wrapper__input">
      <input v-model="username" type="text" class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input v-model="password" type="password" class="wrapper__input__content" placeholder="请输入密码" autocomplete="new-password" />
    </div>
    <div class="wrapper__input">
      <input v-model="ensurement" type="password" class="wrapper__input__content" placeholder="确认密码" autocomplete="new-password" />
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">已有账号去登录</div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    ensurement: ''
  })

  const handleRegister = async () => {
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      console.log(result)
      // ?.  在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined
      if (result?.errno === 0) {
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password, ensurement } = toRefs(data)
  return { username, password, ensurement, handleRegister }
}

const useLoginEffect = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Home' })
  }
  return { handleLoginClick }
}

export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, ensurement, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffect()
    return { username, password, ensurement, show, toastMessage, handleRegister, handleLoginClick }
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
