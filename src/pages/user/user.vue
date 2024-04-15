<script setup lang="ts">
import { unInstance } from '@/service'
import { useAuthStore } from '@/store'

const questionId = ref('')
const authStore = useAuthStore()
const userInfo = ref<any>({})
onLoad(async (options) => {
  questionId.value = options?.id
  const data = await unInstance.get(`/api/user/info`, {
    headers: {
      Authorization: `Bearer ${authStore.token}`,
    },
  })
  const resData = data.data as any
  if (!resData.success)
    await uni.navigateTo({ url: '/pages/index/login' })
  userInfo.value = resData.data
})

async function commit() {
  const data = await unInstance.put(`/api/user/info`, userInfo.value, {
    headers: {
      Authorization: `Bearer ${authStore.token}`,
    },
  })
  const resData=data.data
  if (!resData.success)
    await uni.navigateTo({ url: '/pages/index/login' })
  else
    uni.navigateTo({ url: `/pages/question/index?id=${questionId.value}` })
}
</script>

<template>
  <div class="pt-120">
    <div class="hidden text-center font-size-24 font-size-48 font-size-72" />
    <div class="p-20">
      <nut-form>
        <nut-form-item label="用户名">
          <nut-input v-model="userInfo.username" class="nut-input-text" placeholder="请输入姓名" type="text" />
        </nut-form-item>
        <nut-form-item label="匿名">
          <nut-input v-model="userInfo.nickname" class="nut-input-text" placeholder="请输入年龄" type="text" />
        </nut-form-item>
        <nut-form-item label="联系方式">
          <nut-input v-model="userInfo.phone" class="nut-input-text" placeholder="请输入联系电话" type="text" />
        </nut-form-item>
        <nut-button block type="primary" @click="commit">
          提交
        </nut-button>
      </nut-form>
    </div>
  </div>
</template>

<style scoped>

</style>
