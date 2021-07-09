<template>
  <div class="blog-page">
    <pageBanner :pageMeta="pageInfo" />
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-6 md:px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('blog.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in blogCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ cat['title_' + $i18n.locale] }}</span>
        </div>
      </div>
    </div>
    <div class="container pb-20">
      <blogList v-if="activeCat=='all'" class="blog-list" title="featured" category="all" :language="$i18n.locale"
        :limit="1" featured />
      <blogList v-if="activeCat=='all'" class="blog-list" :category="'all'" :language="$i18n.locale" />
      <template v-else v-for="cat in blogCategories">
        <blogList v-if="activeCat==cat.name" :key="cat.id" class="blog-list" :category="cat.name"
          :language="$i18n.locale" :title="cat['title_' + $i18n.locale]" />
      </template>
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
      blogList,
      appButton,
      pageBanner
    },
    computed: {
      pageInfo() {
        return this.$store.state.pages.blog
      }
    },
    async asyncData(context) {
      const cats = await axios.get(process.env.baseUrl + '/blog-categories');
      return {
        blogCategories: cats.data
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
    @apply px-6 mt-20;
  }

  @screen md {
    .blog-list {
      @apply px-12;
    }
  }
</style>