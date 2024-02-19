<template>
  <div>
    测试123
    <template v-for="(item, index) in dataRef" :key="index">
      <MobileNoticeItem :dataRef="item" />
    </template>

    <div class="w-[286px] h-[55px] grid grid-cols-[2.75rem,1fr] grid-rows-[30px,20px] gap-2">
      <div class="bg-red-300">
        <img src="/@/assets/images/logo.png" class="w-10 h-10" />
      </div>
      <div class="bg-blue-300 truncate mr-5">
        <a>大索的舒适度绝对是来看教练空间朗多的飞机啊师傅来就是独立空间的师傅教练的送机法律框架吉卡德罗夫教练肯定是教练看到送机弗兰克但是每次离开都是美女发来肯德基师傅离开的师傅们都开始教练看</a>
      </div>
      <div class="bg-yellow-300 col-span-full">3</div>
    </div>

    <div class="flex flex-row bg-gray mb-2 h-[5rem] w-full">
      <div class="basis-17 flex-grow-0 flex-shrink-0 bg-red-500">121323</div>
      <div class="bg-green-500 w-full">
        <div class="bg-blue-200 mr-10">eeee</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CommonObj } from '/@/types/index'
import MobileNoticeItem from './components/MobileNoticeItem.vue'
const dataRef = ref<CommonObj>([])
dataRef.value = [
  {
    id: 1,
    name: 'zbx',
  },
  {
    id: 2,
    name: 'ljl',
  },
]
</script>

<style scoped></style>
