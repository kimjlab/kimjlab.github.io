<script setup lang="ts">
defineProps({
  news: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <nuxt-link :to="news._path" class="flex flex-col md:flex-row md:h-28 gap-4 rounded hover:bg-slate-300 hover:bg-opacity-50 transition-all ease-in-out duration-150">
    <img class="w-full md:w-40 h-28 md:h-auto object-cover rounded-t md:rounded-tr-none md:rounded-l" :src="news.img ? `/img/${news.img}.jpg` : '/img/lab.jpg'" alt="Sunset in the mountains">
    <div class="px-4 pb-4 md:p-4 w-full">
      <div class="flex flex-col-reverse">
        <div class="text-lg lg:text-2xl font-bold">{{ news.title }}</div>
        <span class="text-sm text-slate-600">{{ news.date }}</span>
      </div>
      <p class="pt-2">{{ news.description }}</p>
    </div>
  </nuxt-link>
</template>