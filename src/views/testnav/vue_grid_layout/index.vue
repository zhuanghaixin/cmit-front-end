<template>
  <grid-layout v-model:layout="layout" :col-num="12" :row-height="30" :is-draggable="true" :is-resizable="true"
    :is-mirrored="false" :vertical-compact="true" :margin="[10, 10]" :use-css-transforms="true">
    <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
      <div class="bg-red-400 w-full h-full"> {{ item.i }}</div>
    </grid-item>
  </grid-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// import { CommonObj } from '/@/types/index'
import { GridLayout, GridItem } from 'vue3-grid-layout-next'
// const loading = ref(true)

// setTimeout(() => {
//   loading.value = false
// }, 1500)
const layout = ref<any[]>([])
// layout.value = [
//   { "x": 0, "y": 0, "w": 2, "h": 2, "i": "0" },
//   { "x": 2, "y": 0, "w": 2, "h": 4, "i": "1" },
//   { "x": 4, "y": 0, "w": 2, "h": 5, "i": "2" },
//   { "x": 6, "y": 0, "w": 2, "h": 3, "i": "3" },
//   { "x": 8, "y": 0, "w": 2, "h": 3, "i": "4" },
//   { "x": 10, "y": 0, "w": 2, "h": 3, "i": "5" },
//   { "x": 0, "y": 5, "w": 2, "h": 5, "i": "6" },
//   { "x": 2, "y": 5, "w": 2, "h": 5, "i": "7" },
//   { "x": 4, "y": 5, "w": 2, "h": 5, "i": "8" },
//   { "x": 6, "y": 3, "w": 2, "h": 4, "i": "9" },
//   { "x": 8, "y": 4, "w": 2, "h": 4, "i": "10" },
//   { "x": 10, "y": 4, "w": 2, "h": 4, "i": "11" },
//   { "x": 0, "y": 10, "w": 2, "h": 5, "i": "12" },
//   { "x": 2, "y": 10, "w": 2, "h": 5, "i": "13" },
//   { "x": 4, "y": 8, "w": 2, "h": 4, "i": "14" },
//   { "x": 6, "y": 8, "w": 2, "h": 4, "i": "15" },
//   { "x": 8, "y": 10, "w": 2, "h": 5, "i": "16" },
//   { "x": 10, "y": 4, "w": 2, "h": 2, "i": "17" },
//   { "x": 0, "y": 9, "w": 2, "h": 3, "i": "18" },
//   { "x": 2, "y": 6, "w": 2, "h": 2, "i": "19" }
// ],
layout.value = [
  { w: 8, x: 0, h: 6, y: 11, i: '0' },
  { w: 8, x: 0, h: 5, y: 6, i: '1' },
  { w: 4, x: 8, h: 4, y: 13, i: '2' },
  { w: 4, x: 8, h: 4, y: 9, i: '3' },
  { w: 4, x: 8, h: 3, y: 6, i: '4' },
  { w: 8, x: 0, h: 6, y: 0, i: '5' },
  { w: 4, x: 8, h: 6, y: 0, i: '6' },
]
</script>
