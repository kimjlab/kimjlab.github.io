<script setup lang="ts">
defineProps<{
  links?: {
    id: string
    text: string
    depth: number
    children?: {
      id: string
      text: string
      depth: number
    }[]
  }[],
  childDepth?: {
    type: boolean,
    default: false
  }
}>()
</script>
<template>
  <div class="text-sm lg:text-base flex flex-col h-fit p-4 rounded border border-teal-300 leading-relaxed">
    <span class="block text-base lg:text-xl font-bold text-center mb-2">目次</span>
    <template v-for="l in links">
      <template v-if="l.depth === 2">
        <div class="flex flex-row items-baseline gap-2 hover:underline">
          <Icon name="mdi:circle" class="h-1 lg:h-2 w-1 lg:w-2" />
          <a :href="`#${l.id}`">{{ l.text }}</a>
        </div>
      </template>
      <template v-if="childDepth && l.children">
        <template v-for="c in l.children">
          <template v-if="c.depth === 3">
            <div class="ml-4 flex flex-row items-center gap-2 hover:underline">
              <Icon name="mdi:circle-outline" size="8" /><a :href="`#${c.id}`">{{ c.text }}</a>
            </div>
          </template>
        </template>
      </template>
    </template>
  </div>
</template>