<template>
  <div id="meta2d"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Meta2d } from 'meta2d.js'

onMounted(() => {
  new Meta2d('meta2d')
  registerCommonDiagram()
})
</script>
