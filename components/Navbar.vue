<script setup lang="ts">
import { onBeforeRouteUpdate } from 'nuxt/app'
defineProps<{
  links: {
    title: string
    link: string
  }[]
}>()
const isMenuOpen = ref(false)
const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
onBeforeRouteUpdate(() => {
  isMenuOpen.value = false
})
</script>
<template>
  <header class="flex flex-row items-center px-6 md:px-12 py-6 bg-teal-50">
    <nuxt-link to="/" exact class="flex flex-col" active-class="brand" exact-active-class="brand">
      <span class="text-sm">静岡大学情報学部行動情報学科</span>
      <span class="text-2xl font-bold tracking-wide">金鎭赫研究室</span>
    </nuxt-link>
    <div class="lg:hidden ml-auto">
      <Icon name="mdi:menu" class="ml-auto text-2xl cursor-pointer" @click="openMenu" />
    </div>
    <nav
      :class="[isMenuOpen ? 'flex-col absolute top-24 left-0 z-20 bg-teal-50 bg-opacity-90 text-sm w-full p-6 md:px-12 space-y-4' : 'hidden'] + ' flex lg:flex lg:flex-row lg:items-center lg:ml-auto lg:space-x-8'">
      <nuxt-link v-for="l in links" :to="l.link"
        class="hover:border-b hover:border-teal-600 hover:text-teal-600 hover:font-bold transition-all ease-in-out duration-50">{{
          l.title }}</nuxt-link>
    </nav>
</header></template>