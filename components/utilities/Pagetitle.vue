<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'lab'
  },
  imageAlt: {
    type: String,
    default: '研究室の画像'
  }
})
</script>
<template>
  <div class="relative h-40 lg:h-80">
    <div class="bg-teal-100 absolute h-full w-full z-10 bg-opacity-5 top-0 font-bold">
      <div class="px-6 md:px-12 lg:px-0 lg:w-2/3 py-6 lg:py-12 m-auto h-full flex flex-col justify-center">
        <h1 class="text-3xl lg:text-5xl font-bold capitalize">{{ title }}</h1>
        <p class="pt-3 lg:pt-6">
          <slot />
        </p>
      </div>
    </div>
    <img :src="`/img/${image}.jpg`" :alt="imageAlt" class="w-full h-40 lg:h-80 object-cover opacity-25">
  </div>
</template>