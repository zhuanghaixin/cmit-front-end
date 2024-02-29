<template>
  <div>

    <vxe-table border :data="tableData" show-overflow :radio-config="{
      labelField: 'name'
    }">
      <vxe-column title="类别名称" type="radio" width="100"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <!-- <vxe-column field="name" title="Name" max-width="100">
        <template #default="{ row }">
          <div>{{ row.name }}</div>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column> -->
    </vxe-table>

  </div>
</template>

<script setup lang="ts">

import { ref, reactive } from 'vue'
// import { VxeGridProps } from 'vxe-table'
// interface UserVO {
//   id: number;
//   name: string;
//   role: string;
//   sex: string;
//   age: number;
//   address: string;
// }
import { demo } from './demo.js'
const tableData = ref<any[]>(demo.rows)



</script>

<style scoped></style>