<template>
  <div>
    <!-- Banner -->
    <homeBanner :pageMeta="homeMeta" />
    <!-- Latest Articles -->
    <div class="container">
      <div class="row">
        <articlesSpotlight class="w-full p-12" :numberOfArticles="4" :language="$i18n.locale" :title="$t('blog.spotlight')" />
      </div>
    </div>
    <!-- Featured publication -->
    <div class="grey-light">
      <div class="container ">
        <div class="row grey-light">
          <lastestPublications class="w-full p-12" :title="$t('publication.title')" :numberOfPublications="2" />
        </div>
      </div>
    </div>
    <!-- Upcoming Events -->
    <div class="container">
      <div class="row">
        <upcomingEvents :title="$t('events.upcoming')" category="all" :numberOfEvents="2" />
      </div>
    </div>
    <!-- Impact -->
    <div class="container ">
      <div class="row">
        <ourWork class="w-full p-12" :title="$t('impact.title')" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import articlesSpotlight from "~/components/Blog/ArticlesSpotlight";
  import lastestPublications from '~/components/Publications/LastestPublications';
  import upcomingEvents from '~/components/Events/UpcomingEvents';
  import ourWork from '~/components/Programs/OurWork';

  import homeBanner from "~/components/UI/HomeBanner";

  export default {
    layout: 'general',
    components: {
      ourWork,
      homeBanner,
      articlesSpotlight,
      lastestPublications,
      upcomingEvents
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
      return {
        homeMeta: pageMeta.data[0]
      }
    },
  }
</script>

<style scoped>
  .grey-light {
    @apply bg-josa-warm-grey-light;
  }
</style>