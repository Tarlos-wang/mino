<template>
  <div class="min-h-screen bg-custom-gray">
    <NavBar/>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-20">
      <div class="flex">
        <FilterSidebar/>
        <SearchResults/>
      </div>
    </main>
  </div>
</template>

<script setup>

import NavBar from './NavBar.vue'
import FilterSidebar from '../components/FilterSidebar.vue'
import SearchResults from '../components/SearchResults.vue'



</script>
