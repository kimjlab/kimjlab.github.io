<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true
  },
  isGraduated: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div v-if="!isGraduated" class="lg:h-28 flex flex-col lg:flex-row gap-4 items-center odd:bg-teal-50 lg:odd:bg-inherit p-4 lg:p-0 rounded lg:rounded-none">
    <img :src="`/img/member/${data.img}.jpg`" onerror="this.src='https://placehold.jp/eeeeee/000000/150x150.png?text=Image'" alt="" class="w-24 lg:w-28 h-24 lg:h-full object-cover rounded-full lg:rounded">
    <div class="flex flex-col gap-2 items-center lg:items-start">
      <div class="flex flex-col items-center lg:flex-row gap-2">
        <p class="text-xl font-semibold">{{ data.name }}</p>
        <p class="lg:self-end">{{ data.belonging }}</p>
      </div>
      <p>研究テーマ: <b>{{ data.theme }}</b></p>
      <p class="text-sm">趣味: {{ data.message }}</p>
    </div>
  </div>
  <tr v-else>
    <th>{{ data.name }}</th>
    <td>{{ data.belonging }}</td>
    <td>{{ data.theme }}</td>
  </tr>
</template>