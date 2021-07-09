<template>
  <div :id="pageInfo.pageId">
    <pageBanner :pageMeta="pageInfo" />
    <!-- HTML Content -->
    <div v-if="pageInfo.htmlContent['content_' + $i18n.locale]" id="content" class="container py-20">
      <div class="px-6 md:px-12" v-html="pageInfo.htmlContent['content_' + $i18n.locale]"></div>
    </div>
    <!-- Know More -->
    <list />
  </div>
</template>

<script>
  import pageBanner from "~/components/UI/PageBanner";
  import list from '~/components/KnowMore/List'

  export default {
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageInfo['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.pageInfo['metaDescription_' + this.$i18n.locale] ? this.pageInfo['metaDescription_' + this.$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      pageBanner,
      list
    },
    computed: {
      pageInfo() {
        return this.$store.state.pages.about
      }
    },
  }
</script>

<style scoped>
  #content /deep/ p,
  #content /deep/ h3 {
    @apply mb-4;
  }
</style>