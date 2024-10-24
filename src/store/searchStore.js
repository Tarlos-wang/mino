// stores/searchStore.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCoupon } from '../api/search.js'

export const useSearchStore = defineStore('search', () => {
  // 状态管理：搜索关键词和多选筛选条件
  const keyword = ref('')
  const selectedFilters = ref([])
  const allResults = ref([
    {  category: 'percent_off', store: '1 Up Nutrition', logo: 'src/assets/amazon.png', discount: '25% OFF', description: '1 Up Nutrition Provides FREE Shipping On ALL Orders - No Minimums Or Exclusions!', verified: true, usedToday: 91 },
    {  category: 'percent_off', store: '1 Up Nutrition', logo: 'src/assets/amaysim.png', discount: '10% OFF', description: 'Up To 10% Off At 1 Up Nutrition! Grab This Offer While It Lasts', verified: true, usedToday: 55 },
    {  category: 'price_off', store: 'Mino', logo: 'src/assets/amaincycling.png', discount: '250 CODES', description: 'Stop copying and pasting codes! Try them all in one click.', verified: true, usedToday: 3246 }
  ])

  const fetchResults = async searchKeyword => {
    try {
      const data = await getCoupon(searchKeyword)
      // 确保 data 是一个数组
      allResults.value = Array.isArray(data) ? data : []
      console.log('搜索结果:', allResults.value)
    } catch (error) {
      console.error('获取搜索结果失败:', error)
      allResults.value = [] // 出错时设置为空数组
    }
  }

  // 计算属性：根据关键词和筛选条件筛选数据
  const filteredResults = computed(() => {
    return allResults.value.filter(item => {
      const matchesFilter = selectedFilters.value.length === 0 || selectedFilters.value.includes(item.category)
      return matchesFilter
    })
  })

  // 定义操作方法
  const setKeyword = async value => {
    keyword.value = value
    await fetchResults(value)
  }

  return {
    keyword,
    selectedFilters,
    filteredResults,
    setKeyword
  }
})
