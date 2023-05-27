<script setup>
const news = await useAsyncData('news', () => queryContent('/news').only(['_path', 'title', 'description', 'date', 'img']).sort({ date: -1 }).find())
useHead(() => ({ title: 'News' }))
</script>

<template>
  <div>
    <UtilitiesPagetitle title="news">
      研究室の最新情報をお届けします。
    </UtilitiesPagetitle>
    <UtilitiesPageContainer>
      <div class="flex flex-col gap-4">
        <ContentQuery path="news" :only="['title', '_path', 'date', 'description']" :sort="{ date: -1 }">
          <template #default="{ data }">
            <NewsCard v-for="d in data" :news="d" />
          </template>
        </ContentQuery>
      </div>
    </UtilitiesPageContainer>
  </div>
</template>
