<template>
  <div class="w-1/4 mt-12">
    <div class="bg-white rounded-lg p-4 mb-4">
      <a href="/">
        <img class="h-auto w-auto" src="../assets/search-logo.jpg" alt="Mino logo" />
      </a>
    </div>
    <div class="box-shadow bg-white p-4">
      <h2 class="text-lg font-semibold mb-4">Filters</h2>
      <div class="space-y-2">
        <label v-for="option in filterOptions" :key="option" class="flex items-center">
          <input
            type="checkbox"
            :value="option"
            v-model="selectedFilters"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useSearchStore } from '../store/searchStore.js'

const filterOptions = ['percent_off', 'price_off','free_shipping'] // 可选筛选条件

const { selectedFilters } = storeToRefs(useSearchStore()) // 使用 Pinia Store
</script>
