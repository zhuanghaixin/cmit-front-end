
import { itemProps } from '/@/components/Menu/src/props';

import AvatarDemo1Vue from './AvatarDemo1.vue';
<template>
  <a-avatar-group :max-count="props.maxCount" max-popover-trigger="click" size="large"
    :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer', width: '50px', height: '50px' }">
    <template v-for="(item, index) in props.nameList" :key="index">
      <AvatarDemo1 :name="item" :size="50"></AvatarDemo1>
    </template>
    <!-- <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <a-avatar style="background-color: #f56a00">K</a-avatar>
    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <a-avatar style="background-color: #f56a00">K</a-avatar>
    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <a-avatar style="background-color: #f56a00">K</a-avatar>
    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <a-avatar style="background-color: #f56a00">K</a-avatar> -->
    <!-- <a-tooltip title="Ant User" placement="top"> -->
    <!-- <a-avatar style="background-color: #87d068">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar>
      <a-avatar style="background-color: #1890ff">
        <template #icon>
          <AntDesignOutlined />
        </template>
      </a-avatar>
      <a-avatar style="background-color: #1890ff">
        <template #icon>
          <AntDesignOutlined />
        </template>
      </a-avatar> -->
    <!-- </a-tooltip> -->
  </a-avatar-group>
</template>

<script setup lang="ts">
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons-vue';
import AvatarDemo1 from './AvatarDemo1.vue'
const props = defineProps({
  maxCount: {
    type: Number,
    default: 1
  },
  nameList: {
    type: Array,
  }

})
</script>

<style scoped></style>