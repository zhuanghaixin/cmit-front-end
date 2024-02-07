<template>
  <div>
    123
    {{ dataRef }}
  </div>
</template>

<script setup lang="ts">
import { type CommonObj } from '../../../../types/index'
import { PropType } from 'vue'
const props = defineProps({
  dataRef: {
    type: Object as PropType<CommonObj>,
    default: () => [1, 2, 3]
  }
})

// const props = defineProps({
//   dataRef: {
//     type: Object,
//     default: () => { },
//   },
// })
console.log('props', props)
</script>

<style scoped></style>
