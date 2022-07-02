<script setup lang="ts">
import { useIndex } from '@/stores/index'
const index = useIndex()
</script>

<template>
  <div class="hello-container">
    <h1>hello word</h1>
    <p>{{ index.id }}</p>
  </div>
</template>

<style lang="less" scoped>
.hello-container {
  h1 {
    font-weight: 700;
    color: red;
  }
}
</style>
