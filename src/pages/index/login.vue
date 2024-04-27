<script lang="ts" setup>
import { useToast } from 'nutui-uniapp/composables'
import { unInstance } from '@/service'
import { useAuthStore } from '@/store'

const toast = useToast()
const authStore = useAuthStore()
const username = ref('')
const password = ref('')
async function login() {
  const data = await unInstance.post('/api/user/login', { username: username.value, password: password.value })
  const resData = data.data as any
  if (resData.success) {
    authStore.setToken(resData.data.token)
    await uni.navigateBack({ delta: 1 })
  }
  else { toast.error(`登录失败:${resData.message}`) }
}
async function autoLogin() {
  username.value = 'admin'
  password.value = 'root'
  await login()
}
</script>

<template>
  <div class="login-page">
    <div class="login-form">
      <nut-cell-group>
        <nut-cell title="用户名">
          <nut-input v-model="username" placeholder="请输入用户名" />
        </nut-cell>
        <nut-cell title="密码">
          <nut-input v-model="password" type="password" placeholder="请输入密码" />
        </nut-cell>
      </nut-cell-group>
      <nut-button block type="primary" class="login-button" @click="login">
        登录
      </nut-button>
      <div class="w-100 h-12"></div>
      <nut-button block type="primary"  @click="autoLogin">
        一键登录
      </nut-button>
    </div>
  </div>
</template>

<route lang="json">
{
"style": {
"navigationStyle": "default",
"navigationBarTitleText": "Home"
}
}
</route>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  max-width: 320px;
  width: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-button {
  margin-top: 20px;
}
</style>
