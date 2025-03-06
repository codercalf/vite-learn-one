<template>
  <div class="app-page">
    <Header class="header" />

    <div class="content">
      <Graphics class="graphics" />
      <View class="view" />
      <Props class="props" />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Graphics from '@/components/Graphics.vue'
import View from '@/components/View.vue'
import Props from '@/components/Props.vue'
</script>

<style lang="scss" scoped>
.app-page {
  height: 100vh;
  overflow: hidden;
}
.header {
  height: 100px;
  background-color: pink;
  margin-bottom: 10px;
}
.content {
  height: calc(100% - 110px);
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  column-gap: 20px;
  .graphics,
  .view,
  .props {
    // background-color: orange;
  }
}
</style>
