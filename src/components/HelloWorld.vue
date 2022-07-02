<script setup lang="ts">
import { useIndex } from '@/stores/index'
const index = useIndex()
const count = ref(0)
</script>

<template>
  <div class="hello-container">
    <h1>hello word</h1>
    <p>{{ index.id }}</p>
    <p>count: {{ count }}</p>
    <div class="test-stylelint">hahah1</div>
    <i-carbon-asleep-filled />
  </div>
</template>

<style lang="less" scoped>
.hello-container {
  h1 {
    font-weight: 700;
    color: red;
  }

  .test-stylelint {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
