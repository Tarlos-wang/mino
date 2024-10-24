<template>
  <div class="box-shadow min-h-[160px] flex items-stretch">
    <!-- 左 -->
    <div class="flex flex-col items-center justify-center min-w-[170px] pt-4 p-3 border-r">
      <img :src="coupon.logo" :alt="coupon.store" class="w-20 h-20 object-contain mb-2" />
      <p class="text-sm text-gray-500">{{ coupon.store }}</p>
    </div>
    <!-- 中 -->
    <div class="flex-1 flex flex-col items-start p-8">
      <h3 class="text-lg font-semibold mb-2">{{ coupon.title }}</h3>
      <p class="text-sm text-gray-600 mb-4">{{ coupon.description }}</p>
      <div class="flex items-center text-sm text-gray-500">
        <CheckCircleIcon class="h-4 w-4 mr-1 text-green-500" />
        Verified {{ coupon.verifiedTime }}
      </div>
    </div>
    <!-- 右 -->
    <div class="min-w-[170px] flex items-center justify-center">
      <button @click="$emit('openModal', coupon)" class="px-10 py-2 mr-10 bg-orange-500 text-white rounded hover:bg-orange-600">
        {{ coupon.discount === '250 CODES' ? 'Install Mino' : 'Show Code' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from 'lucide-vue-next'

defineProps(['coupon'])
defineEmits(['openModal'])
</script>
