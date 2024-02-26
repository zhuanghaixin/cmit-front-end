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
</script>

<style scoped></style>