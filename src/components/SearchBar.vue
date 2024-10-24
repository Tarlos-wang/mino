<template>
  <div class="flex-grow ml-8 mr-14 relative">
    <input
      v-model="inputValue"
      @keyup.enter="emitSearch"
      type="text"
      placeholder="Find coupons for all your favorite stores..."
      class="bg-gray-100 w-full px-3 py-2 pl-10 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100" />
    <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
  </div>
</template>

<script setup>
import { SearchIcon } from 'lucide-vue-next'

import { ref } from 'vue'
import { useSearchStore } from '../store/searchStore.js'

const searchStore = useSearchStore() // 使用 Pinia Store
const inputValue = ref('')

// 将用户输入的关键词保存到 store 中
const emitSearch = () => {
  if (inputValue.value.trim()) {
    searchStore.setKeyword(inputValue.value)
  }
}
</script>
