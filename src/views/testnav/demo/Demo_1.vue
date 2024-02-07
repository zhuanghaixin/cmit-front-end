<template>
  <div>
    <div v-for="(item, index) in dataRef" :key="index">
      <div v-html="item?.noticeContent"></div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { testRes } from './demo.js'
const dataRef = ref('')
dataRef.value = testRes.data

</script>

<style scoped></style>