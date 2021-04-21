<template>
  <div class="blog-page">
    <pageBanner :pageMeta="blogMeta" />
    <div class="container pb-20">
      <blogList v-if="activeCat=='all'" class="blog-list" title="featured" category="all" :language="$i18n.locale"
        :limit="1" featured />
      <blogList v-if="activeCat=='all' || activeCat=='all'" class="blog-list" :category="'all'"
        :language="$i18n.locale" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import blogList from "@/components/Blog/BlogList";
  import appButton from '@/components/FormComponents/AppButton';
  import pageBanner from "@/components/UI/PageBanner";

  export default {
    data() {
      return {
        activeCat: 'all'
      }
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.blogMeta['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.blogMeta['metaDescription_' + this.$i18n.locale] ? this.blogMeta['metaDescription_' + this
              .$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      blogList,
      appButton,
      pageBanner
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=blog');
      return {
        blogMeta: pageMeta.data[0],
      }
    },
    methods: {
      setActiveCat(cat) {
        this.activeCat = cat
      }
    }
  };
</script>

<style scoped>
  .blog-list {
    @apply px-12 mt-20;
  }
</style>