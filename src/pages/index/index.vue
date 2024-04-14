<script setup lang="ts">
const quesionId = ref('')

function go() {

}
</script>

<template>
  <nut-cell-group>
    <nut-cell title="用户名">
      <nut-input v-model="quesionId" placeholder="问卷序号" />
    </nut-cell>
  </nut-cell-group>
  <nut-button type="primary" class="login-button" @click="go">
    填写
  </nut-button>
</template>

<style scoped>

</style>
