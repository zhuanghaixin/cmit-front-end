<template>
  <!-- 
    如果显示的头像数量超过showCount，那么最多显示 showCount 个头像 ,还有一个数量头像
    如果显示的头像数量少于showCount，那么最多显示 showCount 个头像 ,没有数量头像
   -->
  <div class="avatar-group" v-if="props.nameList.length > props.showCount">
    <a-avatar-group class="flex-row-reverse">
      <span class="avatar-item-show-count" :style="{ width: `${props.size}px`, height: `${props.size}px` }">{{
        showRestCount
      }}</span>
      <template v-for="(item, index) in props.nameList.slice(0, props.showCount)" :key="index">
        <AvatarDemo1 :name="item" :size="props.size"></AvatarDemo1>
      </template>

    </a-avatar-group>
  </div>
  <div class="avatar-group" v-else>
    <a-avatar-group>
      <template v-for="( item, index ) in  props.nameList " :key="index">
        <AvatarDemo1 :name="item" :size="50"></AvatarDemo1>
      </template>
    </a-avatar-group>
  </div>
</template>

<script setup lang="ts">
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons-vue';
import AvatarDemo1 from './AvatarDemo1.vue'
import { ref, computed, onMounted } from 'vue';

type Size = 'large' | 'small' | 'default';
const props = defineProps({
  // maxCount: {
  //   type: Number,
  //   default: 1
  // },
  nameList: {
    type: Array,
  },
  showCount: {
    type: Number,
    default: 1
  },
  size: {
    type: Number
  }
})

const showRestCount = computed(() => {
  const number = props.nameList.length - props.showCount
  // 如果数量小于等于100，就正常显示。否则就显示100+
  if (number <= 100) {
    return number.toString();
  } else {
    const hundreds = Math.floor(number / 100);
    return `${hundreds}00+`;
  }

})
</script>

<style scoped>
.avatar-group :deep(.ant-avatar) {}

.avatar-group .avatar-item-show-count {
  background-color: #0268b3;
  border: 1px solid #fff;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  margin-left: -10px;
}
</style>