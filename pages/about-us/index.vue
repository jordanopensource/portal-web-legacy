<template>
  <div :id="meta.pageId">
    <pageBanner :pageMeta="meta" />
    <!-- HTML Content -->
    <div v-if="meta.htmlContent['content_' + $i18n.locale]" id="content" class="container py-20">
      <div class="px-12" v-html="meta.htmlContent['content_' + $i18n.locale]"></div>
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
      return {
        title: this.meta['title_' + this.$i18n.locale],
        meta: [{
          hid: this.meta.pageId,
          name: this.meta['title_' + this.$i18n.locale]
        }]
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
