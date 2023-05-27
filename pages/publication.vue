<script setup lang="ts">
useHead({
  title: 'Publication'
})
const publication = await useAsyncData('publication', () => queryContent('/publication').findOne())
</script>
<template>
  <div>
    <UtilitiesPagetitle title="publication" image="lab-5">
      研究成果の一覧
    </UtilitiesPagetitle>
    <UtilitiesPageContainer>
      <div class="bg-teal-100 rounded p-8 text-sm">
        <ul class="list-inside list-disc space-y-2">
          <li><u>下線部</u>: 指導教員</li>
          <li><b>太字</b>: 所属学生</li>
        </ul>
      </div>
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-20">
        <ContentDoc :slot="publication" class="lg:col-start-1 lg:col-end-9" />
        <Toc :links="publication.data.value.body.toc.links" :child-depth="true" class="mb-6 lg:mb-0 lg:col-start-9 lg:col-end-13" />
      </div>
    </UtilitiesPageContainer>
  </div>
</template>