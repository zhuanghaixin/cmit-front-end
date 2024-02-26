
import { log } from 'console';
<template>
  <!-- <AvatarDemo1 name="庄海鑫" :size="50"></AvatarDemo1>
  <AvatarDemo1 name="庄海" :size="50"></AvatarDemo1> -->
  <br>
  <AvatarDemo2 :nameList="xxx" :max-count="2" :show-count="6"></AvatarDemo2>
  <AvatarDemo3 :nameList="xxx" :show-count="6" :size="50"></AvatarDemo3>
</template>

<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';

import AvatarDemo1 from './AvatarDemo1.vue'
import AvatarDemo2 from './AvatarDemo2.vue'
import AvatarDemo3 from './AvatarDemo3.vue'
import xxx from './demo'
console.log('xxx', xxx)
</script>

<style scoped></style>