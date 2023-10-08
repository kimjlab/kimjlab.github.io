<template>
  <ul class="ml-4 mb-2 md:mb-4 list-inside list-disc space-y-2">
    <slot />
  </ul>
</template>
<style>
ul > li > ul {
  @apply ml-4;
}
ul > li > ul > li {
  @apply !list-[circle];
}
</style>