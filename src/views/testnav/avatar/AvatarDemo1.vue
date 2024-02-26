<template>
  <a-avatar :size="props.size" :style="{ backgroundColor: backgroundColor }">
    {{ lastChar }}
  </a-avatar>
</template>

<script setup lang="ts">
// import { UserOutlined } from '@ant-design/icons-vue';
import { ref, computed, onMounted } from 'vue';
import { Avatar } from 'ant-design-vue';

const size = 'large'; // 设置头像大小，可以根据需要调整
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
  // size: {
  //   type: String,
  //   default: "large"
  // }
})

const lastChar = computed(() => {
  const char = props.name.split('')[props.name.length - 1];
  return char
})

console.log(111, lastChar, props.size)



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
onMounted(() => {

  console.log(1222211, lastChar)


})
</script>
<style scoped></style>