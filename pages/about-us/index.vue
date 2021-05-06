<template>
  <div :id="meta.pageId">
    <pageBanner :pageMeta="meta" />
    <!-- HTML Content -->
    <div v-if="meta.htmlContent['content_' + $i18n.locale]" id="content" class="container py-20">
      <div class="px-6 md:px-12" v-html="meta.htmlContent['content_' + $i18n.locale]"></div>
    </div>
    <!-- Know More -->
    <list />
  </div>
</template>

<script>
  import axios from 'axios';
  import pageBanner from "~/components/UI/PageBanner";
  import list from '~/components/KnowMore/List'

  export default {
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.meta['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.meta['metaDescription_' + this.$i18n.locale] ? this.meta['metaDescription_' + this
              .$i18n.locale] : ''
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
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=about');
      return {
        meta: pageMeta.data[0]
      }
    }
  }
</script>

<style scoped>
  #content /deep/ p,
  #content /deep/ h3 {
    @apply mb-4;
  }
</style>