<template>
  <div id="banner" class="bg-josa-warm-grey-light">
    <div class="container">
      <div class="flex flex-row justify-between align-middle flex-wrap md:flex-no-wrap px-6 md:px-12 py-20 lg:py-32 bg-josa-warm-grey-light">
        <h1 class="w-full md:w-1/2 flex-shrink-0 mb-8">{{ pageMeta['title_' + $i18n.locale] }}</h1>
        <p v-if="pageMeta['description_' + $i18n.locale]" class="md:ltr:pl-8 md:rtl:pr-8 w-full md:w-1/2 flex-shrink-0">
          {{ pageMeta['description_' + $i18n.locale] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pageMeta: {
        type: Object,
        required: true
      }
    }
  }

</script>
