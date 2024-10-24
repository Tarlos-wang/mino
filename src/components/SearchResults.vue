<template>
  <div class="w-3/4 pl-4 ml-4">
    <h2 class="text-2xl mb-3 leading-10">Search Results for "{{ keyword }}"</h2>
    <div class="space-y-6">
      <div
        v-for="coupon in filteredResults"
        :key="coupon.id"
        class="box-shadow bg-white min-h-[160px] flex items-stretch">
        <!-- 左 -->
        <div class="flex flex-col items-center justify-center w-[170px] pt-4 p-3 border-r">
          <div class="flex justify-center w-[120px] h-[50px] pb-3 mb-4 border-b border-dashed border-1 border-gray-300">
            <img :src="coupon.logo" :alt="`${coupon.store} logo`" class="max-w-20 object-contain" />
          </div>
          <div class="flex max-w-[170px]">
            <h3 class="text-xl font-black text-center">{{ coupon.discount }}</h3>
          </div>
        </div>
        <!-- 中 -->
        <div class="flex-1 flex flex-col items-start p-8 pr-16">
          <div class="flex items-center text-xs text-gray-500 mb-9">
            <span v-if="coupon.verified" class="mr-2 flex items-center">
              <CheckBadgeIcon class="h-4 w-4 text-blue-500 mr-1" /> Verified
            </span>
            <div class="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
            <span class="font-extrabold mr-2">{{ coupon.usedToday }}</span>
            <span>Used Today</span>
          </div>
          <p class="text-base text-gray-600 mb-2 font-extrabold">{{ coupon.description }}</p>
        </div>
        <!-- 右 -->
        <div class="min-w-[170px] flex items-center justify-center">
          <button class="px-10 py-2 mr-10 bg-orange-500 text-white rounded hover:bg-orange-600">
            {{ coupon.discount === '250 CODES' ? 'Install Mino' : 'Show Code' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
import { useSearchStore } from '../store/searchStore.js'
import { storeToRefs } from 'pinia'
// 使用 Pinia store 获取筛选后的结果
const searchStore = useSearchStore()

const { keyword, filteredResults } = storeToRefs(searchStore)
//const filteredCoupons = searchStore.filteredResults
</script>
