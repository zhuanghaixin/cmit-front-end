<template>
  <div>
    1234
  </div>
</template>

<script setup lang="ts">
import { useDocumentVisible } from "/@/hooks/own/useDocumentVisible"
import { useDocumentVisibility } from "@vueuse/core";
const visibility = useDocumentVisibility();
console.log(2222, visibility)
const init = (i) => {
  console.log(1)
  console.log('111', i)
}
useDocumentVisible(init)

var data = [
  { "field": "employeesNum", "rule": "ge", "val": 1 },
  { "field": "_employeesNum", "rule": "le", "val": 6 },
  { "field": "outsourcingNum", "rule": "ge", "val": 3 },
  { "field": "_outsourcingNum", "rule": "le", "val": 6 },
  { "field": "totalPeople", "rule": "ge", "val": 1 },
  { "field": "_totalPeople", "rule": "le", "val": 11 }
];

var newData = data.map(({ field, rule, val }) => ({
  field: field.startsWith('_') ? field.substring(1) : field,
  rule,
  val
}));

console.log('newData', newData)


</script>

<style scoped></style>