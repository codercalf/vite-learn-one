<template>
  <div><ElButton @click="open">open</ElButton></div>
</template>
<script setup>
import { ElButton } from 'element-plus'
function open() {
  const pen = {
    name: 'rectangle',
    text: '矩形',
    x: 100,
    y: 100,
    width: 100,
    height: 100,
  }

  meta2d.open({ pens: [pen] })
}
</script>
