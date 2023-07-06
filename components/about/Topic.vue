<script setup lang="ts">
defineProps({
  title: String,
  img: String,
  alt: String,
  reverse: Boolean
})
</script>
<template>
  <h2 class="mb-6 text-2xl lg:text-4xl font-bold">{{ title }}</h2>
  <div class="flex flex-col lg:flex-row gap-8" :class="{'lg:flex-row-reverse': reverse}">
    <img :src="`/img/${img}.jpg`" :alt="alt" class="h-32 lg:h-64 object-contain lg:object-cover rounded">
    <p class="my-auto">
      <slot name="content" />
    </p>
  </div>
</template>