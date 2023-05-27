<template>
  <UtilitiesPageContainer>
    <ContentDoc v-slot="{ doc }">
      <div class="mb-4 flex flex-row space-x-4 items-center text-sm lg:text-base">
        <nuxt-link to="/news">News</nuxt-link>
        <span>/</span>
        <span class="text-slate-300">{{ doc.title }}</span>
      </div>
      <div>
        <div class="flex flex-col space-y-2 mb-6 lg:mb-12">
          <h1 class="text-3xl lg:text-5xl font-bold tracking-wide">{{ doc.title }}</h1>
          <span class="flex flex-row items-center gap-2 ml-auto text-xs"><Icon name="mdi:calendar-outline" /> {{ doc.date }}</span>
        </div>
        <div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-20">
          <ContentRenderer :value="doc" class="lg:col-start-1 lg:col-end-9" />
          <Toc v-if="doc.body.toc.links.length > 0" :links="doc.body.toc.links" class="mb-6 lg:mb-0 lg:col-start-9 lg:col-end-13" />
        </div>
      </div>
    </ContentDoc>
  </UtilitiesPageContainer>
</template>