<script setup lang="ts">
useHead({
  title: 'Home'
})
const research = await useAsyncData('research', () => queryContent('research').findOne())
</script>
<template>
  <div>
    <UtilitiesPagetitle title="ようこそ、金鎭赫研究室へ。" image="lab-2">
      健康学と情報学を融合した健康情報学を研究する研究室です。
    </UtilitiesPagetitle>
    <UtilitiesPageContainer>
      <div class="flex flex-col">
        <h2 class="mb-6 text-2xl lg:text-4xl font-bold">Research</h2>
        <div class="grid lg:grid-cols-3 gap-4">
          <div class="flex flex-col bg-white rounded shadow" v-for="r in research!.data!.value!.body" :key="r.title">
            <img class="w-full h-32 object-cover rounded-t" :src="`/img/${r.img}.jpg`"
              alt="Sunset in the mountains">
            <div class="flex flex-col p-4 w-full h-full">
              <h3 class="text-xl lg:text-3xl font-bold">{{ r.title }}</h3>
              <p class="pt-4 mt-auto">{{ r.description }}</p>
            </div>
          </div>
        </div>
        <UtilitiesInlineButton link="/about" title="詳しく知る" />
      </div>
      <div class="flex flex-col">
        <h2 class="mb-6 text-2xl lg:text-4xl font-bold">News</h2>
        <div class="flex flex-col gap-4">
          <ContentQuery path="news" :only="['title', '_path', 'date', 'description']" :sort="{ date: -1 }" :limit="3">
            <template #default="{ data }">
              <NewsCard v-for="d in data" :news="d" />
            </template>
          </ContentQuery>
        </div>
        <UtilitiesInlineButton link="/news" title="もっと見る" />
      </div>
    </UtilitiesPageContainer>
  </div>
</template>