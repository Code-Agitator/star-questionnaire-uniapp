<script setup lang="ts">
import { unInstance } from '@/service'
import { useAuthStore } from '@/store'

const authStore = useAuthStore()
const id = ref(0)
const question = ref<any[]>([])
const answer = ref<any>({})
onLoad(async (options) => {
  const initAnswer = {} as any
  id.value = options?.id
  const data = await unInstance.get(`/api/question/${id.value}`, {
    headers: {
      Authorization: `Bearer ${authStore.token}`,
    },
  })
  const resData = data.data as any
  if (!resData.success)
    await uni.navigateTo({ url: '/pages/index/login' })
  resData.data.componentList.forEach((component: any) => {
    component.props.options = component.props.options || []
    initAnswer[component.feId] = ''
    if (component.type === 'questionCheckbox')
      initAnswer[component.feId] = []
  })
  question.value = resData.data.componentList
  answer.value = initAnswer
})
async function commit() {
  const answer_ = answer.value
  const result = {} as any
  for (const key in answer_) {
    if (typeof answer_[key] === 'object' && Array.isArray(answer_[key]))
      result[key] = answer_[key].join(',')
    else
      result[key] = answer_[key]
  }
  const data = await unInstance.post(`/api/answer`, {
    questionId: id.value,
    answers: result,
  }, {
    headers: {
      Authorization: `Bearer ${authStore.token}`,
    },
  })
  const resData = data.data
  if (resData.success)
    uni.navigateBack({ delta: 1 })
}
</script>

<template>
  <div class="pt-120">
    <div class="hidden text-center font-size-24 font-size-48 font-size-72" />
    <div class="p-20">
      <nut-form-item v-for="item in question" :key="item.feId" label-position="top" :label="['questionInfo', 'questionParagraph', 'questionTitle'].includes(item.type) ? '' : item.title">
        <nut-input v-if="item.type === 'questionInput'" v-model="answer[item.feId]" :placeholder="item.props.placeholder" />
        <nut-textarea v-if="item.type === 'questionTextarea'" v-model="answer[item.feId]" :placeholder="item.props.placeholder" />
        <nut-radio-group v-if="item.type === 'questionRadio' && item.props.options" v-model="answer[item.feId]">
          <nut-radio v-for="radio in item.props.options" :key="radio?.value" shape="button" :label="radio?.text" size="large">
            {{ radio?.text }}
          </nut-radio>
        </nut-radio-group>
        <nut-checkbox-group v-if="item.type === 'questionCheckbox' && item.props.list" v-model="answer[item.feId]">
          <nut-checkbox v-for="check in item.props.list" :key="check?.value" :label="check.text">
            {{ check.text }}
          </nut-checkbox>
        </nut-checkbox-group>

        <div v-if="item.type === 'questionParagraph'" :class="item.props?.isCenter ? 'text-center' : ''">
          {{ item?.props?.text }}
        </div>
        <div v-if="item.type === 'questionInfo'">
          <div class="p-2 text-center font-size-38 text-black font-bold">
            {{ item.props.title }}
          </div>
          <div class="text-center">
            {{ item.props.desc }}
          </div>
        </div>
        <div v-if="item.type === 'questionTitle'" :class="`${item.props?.isCenter ? 'text-center ' : ''}font-size-${(3 - item.props?.level) * 24}` + ' text-black'">
          {{ item.props.text }}
        </div>
      </nut-form-item>
      <nut-button block type="primary" class="login-button" @click="commit">
        提交
      </nut-button>
    </div>
  </div>
</template>

<style scoped>

</style>
