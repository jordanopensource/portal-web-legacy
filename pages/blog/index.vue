<template>
  <div class="blog-page">

    <pageBanner :pageMeta="blogMeta" />

    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('blog.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in blogCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ cat['title_' + $i18n.locale] }}</span>
        </div>
      </div>
    </div>

    <div class="container pb-20">
      <blogList v-if="activeCat=='all'" class="blog-list" title="featured" category="all" :language="$i18n.locale"
        featured />
      <div v-for="cat in blogCategories" :key="cat.id">
        <blogList v-if="activeCat=='all' || activeCat==cat.name" class="blog-list" :numberOfArticles="numArticles"
          :category="cat.name" :language="$i18n.locale" :title="cat['title_' + $i18n.locale]" />
      </div>

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
      const cats = await axios.get(process.env.baseUrl + '/blog-categories');
      return {
        blogMeta: pageMeta.data[0],
        blogCategories: cats.data
      }
    },
    methods: {
      setActiveCat(cat) {
        this.activeCat = cat
      }
    },
    computed: {
      numArticles() {
        if (this.activeCat == 'all') {
          return 2
        } else {
          return 4
        }
      }
    }
  };
</script>

<style scoped>
  .blog-list {
    @apply px-12 mt-20;
  }
</style>