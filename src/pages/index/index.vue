<script setup lang="ts">
import { useAuthStore } from '@/store'

const questionId = ref('8')
const authStore = useAuthStore()
if (!authStore.isExist())
  uni.navigateTo({ url: 'login' })

function go() {
  uni.navigateTo({ url: `/pages/user/user?id=${questionId.value}` })
}
</script>

<template>
  <div class="pt-180">
    <nut-cell-group class="pt-200">
      <nut-cell>
        <nut-input v-model="questionId" placeholder="问卷序号" />
      </nut-cell>
      <nut-cell>
        <nut-button block type="primary" class="login-button" @click="go">
          填写
        </nut-button>
      </nut-cell>
    </nut-cell-group>
  </div>
</template>

<style scoped>

</style>
