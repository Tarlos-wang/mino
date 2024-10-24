<script setup>
import SearchPage from './layout/SearchPage.vue'
</script>

<template>
  <div id="app">
    <SearchPage />
  </div>
</template>

<style>
/* 全局样式 */
body {
  font-family: 'Inter', sans-serif;
  @apply bg-custom-gray;
}

.box-shadow {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
}

.shadow-custom {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
}

.bg-custom-gray {
  background-color: #F9FAFB;
}
</style>
