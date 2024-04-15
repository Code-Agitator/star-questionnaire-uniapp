<script setup lang="ts">
import { unInstance } from '@/service'
import { useAuthStore } from '@/store'

const authStore = useAuthStore()
const id = ref(0)
const question = ref<any[]>([])
const answer = ref({})
onLoad(async (options) => {
  id.value = options?.id
  const data = await unInstance.get(`/api/question/${id.value}`, {
    headers: {
      Authorization: `Bearer ${authStore.token}`,
    },
  })
  const resData = data.data as any
  if (!resData.success)
    await uni.navigateTo({ url: '/pages/index/login' })
  console.log(resData.data.componentList)
  resData.data.componentList.forEach((component) => {
    component.props.options = component.props.options || []
  })
  question.value = resData.data.componentList
  console.log(question.value)
})
function markAnswer(feId, answer) {
  console.log(feId, answer)
}
</script>

<template>
  <div class="bg-black pt-180">
    <nut-config-provider theme="dark">
      <div class="p-20">
        <nut-form-item v-for="item in question" :key="item.feId" label-position="top" :label="item.props.title">
          <nut-input v-if="item.type === 'questionInput'" :placeholder="item.props.placeholder" />
          <nut-textarea v-if="item.type === 'questionTextarea'" :placeholder="item.props.placeholder" />
          <nut-radio-group v-if="item.type === 'questionRadio' && item.props.options">
            <nut-radio v-for="radio in item.props.options" :key="radio?.value" shape="button" :label="radio?.value" size="large">
              {{ radio?.text }}
            </nut-radio>
          </nut-radio-group>
        </nut-form-item>
      </div>
    </nut-config-provider>
  </div>
</template>

<style scoped>

</style>
