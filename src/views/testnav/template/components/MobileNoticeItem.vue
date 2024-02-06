<template>
  <div>
    123
    {{ dataRef }}
  </div>
</template>

<script setup lang="ts">
  // import { CommonObj } from '../../../../types/index'

  // const props = defineProps({
  //   dataRef: {
  //     type: Array,
  //     default: () => [1, 2, 3]
  //   }
  // })

  const props = defineProps({
    dataRef: {
      type: Object,
      default: () => {},
    },
  })
  console.log('props', props)
</script>

<style scoped></style>
