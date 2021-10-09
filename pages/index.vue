<template>
  <div>
    <!-- Banner -->
    <homeBanner :pageMeta="homeMeta" :programs="programs" />
    <!-- Latest Articles -->
    <div class="container">
      <div class="row">
        <articlesSpotlight class="w-full p-6 md:p-12" :numberOfArticles="4" :language="$i18n.locale"
          :title="$t('blog.spotlight')" tag="spotlight"/>
      </div>
    </div>
    <!-- Join Us -->
    <joinUs class="mt-12" />
    <!-- Impact -->
    <div class="container">
      <div class="row">
        <ourWork class="w-full p-6 md:p-12" :title="$t('impact.title')" :programs="programs" />
      </div>
    </div>
    <!-- Featured publication -->
    <div class="grey-light">
      <div class="container ">
        <div class="row grey-light">
          <lastestPublications class="w-full p-6 md:p-12" :title="$t('publication.title')" :numberOfPublications="2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import articlesSpotlight from "~/components/Blog/ArticlesSpotlight";
  import lastestPublications from '~/components/Publications/LastestPublications';
  import ourWork from '~/components/Programs/OurWork';
  import homeBanner from "~/components/UI/HomeBanner";
  import joinUs from "~/components/JoinUs/JoinUs";


  export default {
    layout: 'general',
    components: {
      ourWork,
      homeBanner,
      articlesSpotlight,
      lastestPublications,
      joinUs
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association',
        meta: [{
            name: 'description',
            content: this.homeMeta['metaDescription_' + this.$i18n.locale] ? this.homeMeta[
              'metaDescription_' + this.$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=home');
      const programs = await axios.get(process.env.baseUrl + '/programs');
      return {
        homeMeta: pageMeta.data[0],
        programs: programs.data
      }
    },
  }
</script>

<style scoped>
  .grey-light {
    @apply bg-josa-warm-grey-light;
  }
</style>
