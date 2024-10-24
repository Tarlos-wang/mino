<template>
  <nav class="bg-white shadow-custom fixed w-full top-0 left-0 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div class="flex items-center">
        <a href="/">
          <img class="h-8 w-auto mx-2 pl--2 object-contain" src="../assets/mino-logo.png" alt="Mino logo" />
        </a>
      </div>
      <SearchBar/>
      <div class="flex items-center space-x-4">
        <!-- 分类和登录按钮 -->
        <div class="relative group">
          <button class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
            Categories
            <ChevronDownIcon class="ml-1 h-4 w-4" />
          </button>
          <!-- 下拉菜单 -->
        </div>
        <button class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
          <UserIcon class="mr-1 h-4 w-4" />
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import SearchBar from '../components/SearchBar.vue'
import { ChevronDownIcon, UserIcon } from 'lucide-vue-next'

</script>
