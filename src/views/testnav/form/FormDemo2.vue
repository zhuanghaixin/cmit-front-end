<template>
  <div>

    <vxe-table border :data="tableData" show-overflow>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" max-width="100">
        <template #default="{ row }">
          <div>1自定义插槽模板得到{{ row.name }}</div>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>

    <vxe-grid v-bind="gridOptions">
      <template #name="{ row }">
        <span>自定义插槽模板 {{ row.name }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script setup lang="ts">

import { ref, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'
interface UserVO {
  id: number;
  name: string;
  role: string;
  sex: string;
  age: number;
  address: string;
}
const tableData = ref<UserVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const gridOptions = reactive<VxeGridProps<UserVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'Name', slots: { default: 'name' } },
    { field: 'sex', title: 'Sex', showHeaderOverflow: true },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>

<style scoped></style>