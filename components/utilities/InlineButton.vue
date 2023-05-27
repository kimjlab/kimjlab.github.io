<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false,
    default: 'mdi:arrow-right'
  },
  size: {
    type: String,
    required: false,
    default: "16"
  }
})
</script>
<template>
  <nuxt-link :to="link" class="flex flex-row items-center py-2 px-4 mt-4 ml-auto font-normal hover:border-b hover:border-b-teal-300 hover:font-bold">
    {{ title }}<Icon :name="icon" :size="size" class="ml-2" />
  </nuxt-link>
</template>