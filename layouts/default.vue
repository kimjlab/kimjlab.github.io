<script setup lang="ts">
useHead({
  titleTemplate: '%s - 静岡大学情報学部行動情報学科金鎭赫研究室'
})
const links = [
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'News',
    link: '/news'
  },
  {
    title: 'Laboratory',
    link: '/laboratory'
  },
  {
    title: 'Publication',
    link: '/publication'
  }
]
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
<template>
  <div class="flex flex-col min-h-screen text-gray-800">
    <Navbar :links="links" />
    <main class="flex-1">
      <slot />
    </main>
    <Icon name="mdi:chevron-up" class="lg:!hidden fixed bottom-4 right-4 text-2xl cursor-pointer rounded bg-teal-300" size="24" @click="scrollToTop" />
    <footer class="flex flex-col lg:flex-row text-sm items-center px-6 lg:px-12 py-6 bg-teal-800 text-white">
      <span class="mb-2 lg:mb-0">©{{ new Date().getFullYear() }} 金鎭赫研究室</span>
      <div class="lg:ml-auto flex flex-col items-center lg:items-end">
        <div class="flex flex-col items-center lg:items-end mb-2">
          <span>〒432-8011</span>
          <span>静岡大学情報学部</span>
          <span>静岡県浜松市中区城北3-5-1</span>
        </div>
        <span>学生部屋: 情報学部2号館6階J2601号室</span>
        <span>教員部屋: 情報学部2号館3階J2311号室</span>
      </div>
    </footer>
  </div>
</template>
<style>
.router-link-exact-active {
  @apply text-teal-600 font-bold border-b border-teal-600;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
