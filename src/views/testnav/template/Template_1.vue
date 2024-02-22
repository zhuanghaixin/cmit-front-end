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
      <!-- <a-carousel :dot="false" dosClass="notice-dots-class" :touchMove="true">
        <div class="bg-green-500 w-70 flex flex-col">
          <div class="bg-blue-200 flex items-center flex-grow">
            <a-avatar :src="'/@/assets/notice.7c39ec99.png'"></a-avatar>
            <div class="truncate">
              <a class="text-color=[#000]">关于2024年1月27日凌晨0点-3点照片得到的</a>
            </div>
          </div>
          <div class="flex-grow flex items-center">2023.2.1</div>
        </div>
        <div class="bg-green-500 w-70 flex flex-col">
          <div class="bg-blue-200 flex items-center flex-grow">
            <a-avatar :src="'/@/assets/notice.7c39ec99.png'"></a-avatar>
            <div class="truncate">
              <a class="text-color=[#000]">关于2024年1月28日凌晨0点-3点照片得到的</a>
            </div>
          </div>
          <div class="flex-grow flex items-center">2023.2.1</div>
        </div>
        <div class="bg-green-500 w-70 flex flex-col">
          <div class="bg-blue-200 flex items-center flex-grow">
            <a-avatar :src="'/@/assets/notice.7c39ec99.png'"></a-avatar>
            <div class="truncate">
              <a class="text-color=[#000]">关于2024年1月29日凌晨0点-3点照片得到的</a>
            </div>
          </div>
          <div class="flex-grow flex items-center">2023.2.1</div>
        </div>
      </a-carousel> -->
    </div>
    <a-carousel :dot="false" dosClass="notice-dots-class" :touchMove="true">
      <div class="bg-green-500 w-70 flex flex-col h-[4.36rem]">
        <div class="h-1/2 bg-blue-200 flex items-center flex-grow">
          <div class="ml-3">
            <a-avatar :src="'/@/assets/notice.7c39ec99.png'"></a-avatar>
          </div>
          <div class="truncate">
            <a class="text-color=[#000]">关于2024年1月27日凌晨0点-3点照片得到的</a>
          </div>
        </div>
        <div class="h-1/2 flex-grow flex items-center">2023.2.1</div>
      </div>
      <div class="bg-green-500 w-70 flex flex-col">
        <div class="h-1/2 bg-blue-200 flex items-center flex-grow">
          <a-avatar :src="'/@/assets/notice.7c39ec99.png'"></a-avatar>
          <div class="truncate">
            <a class="text-color=[#000]">关于2024年1月28日凌晨0点-3点照片得到的</a>
          </div>
        </div>
        <div class="h-1/2 flex-grow flex items-center">2023.2.2</div>
      </div>
      <div class="bg-green-500 w-70 flex flex-col">
        <div class="h-1/2 bg-blue-200 flex items-center flex-grow">
          <a-avatar :src="'/@/assets/notice.7c39ec99.png'"></a-avatar>
          <div class="truncate">
            <a class="text-color=[#000]">关于2024年1月29日凌晨0点-3点照片得到的</a>
          </div>
        </div>
        <div class="h-1/2 flex-grow flex items-center">2023.2.3</div>
      </div>
    </a-carousel>
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

<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 4.36rem;
  line-height: 4.36rem;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
