<template>
  <a-avatar :size="props.size" :style="{ backgroundColor: backgroundColor }">
    {{ lastChar }}
  </a-avatar>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Avatar } from 'ant-design-vue';
const backgroundColor = ref('');

type Size = 'large' | 'small' | 'default';
const props = defineProps({
  name: {
    type: String,
    default: ""
  },
  size: {
    type: [Number, String as () => Size, Number, Object]
  }
})

const lastChar = computed(() => {
  const char = props.name.split('')[props.name.length - 1];
  return char
})


// 生成随机颜色
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
// 设置随机背景色
backgroundColor.value = generateRandomColor();

</script>
<style scoped></style>