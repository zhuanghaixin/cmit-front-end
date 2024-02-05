<template>
  <div>
    <div class="flex h-[4.25rem] bg-white">
      <div class="w-5rem basis-20 bg-red-500 flex-grow-0 flex-shrink-0">
        <h3>公告</h3>
      </div>
      <div class="">
        <Carousel
          autoplay
          :dot="false"
          dotsClass="notice-dots-class"
          :touchMove="true"
          :dotPosition="dotPosition"
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="NoticeCarousel">
  import { Carousel } from 'ant-design-vue'
  import { ref } from 'vue'
  import type { CarouselProps } from 'ant-design-vue'
  const dotPosition = ref<CarouselProps['dotPosition']>('right')
</script>

<style scoped>
  /* For demo */
  :deep(.slick-slide) {
    text-align: center;
    height: 4.25rem;
    line-height: 4.25rem;
    background: #364d79;
    overflow: hidden;
  }

  :deep(.slick-slide h3) {
    color: #fff;
  }

  :deep(.notice-dots-class li) {
    display: none;
  }
</style>
