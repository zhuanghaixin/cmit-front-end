<template>
  <div>
    123
    {{ dataRef }}
  </div>
</template>

<script setup lang="ts">
import { type CommonObj, a } from '../../../../types/index'

// const props = defineProps({
//   dataRef: {
//     type: Array,
//     default: () => [1, 2, 3]
//   }
// })
// console.log('a', a)

// var b: CommonObj = {
//   123: 1
// }
// console.log('b', b)
const props = defineProps({
  dataRef: {
    type: Object as PropType<CommonObj>,
    default: () => { },
  },
})
console.log('props', props)
</script>

<style scoped></style>
