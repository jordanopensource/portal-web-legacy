<template>
  <div>
    <!-- Banner -->
    <homeBanner :pageMeta="homeMeta" />
    <!-- Latest Articles -->
    <div class="container">
      <div class="row">
        <latestArticles class="w-full p-12" :numberOfArticles="4" :language="$i18n.locale" :title="$t('blog.latest')" />
      </div>
    </div>
    <!-- Featured publication -->
    <div class="grey-light">
      <div class="container ">
        <div class="row grey-light">
          <publicationList class="w-full p-12" :title="$t('publication.featured')" featured />
        </div>
      </div>
    </div>
    <!-- Upcoming Events -->
    <div class="container ">
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
  import latestArticles from "~/components/Blog/LatestArticles";
  import publicationList from '~/components/Publications/PublicationList';
  import upcomingEvents from '~/components/Events/UpcomingEvents';
  import ourWork from '~/components/Programs/OurWork';

  import homeBanner from "~/components/UI/HomeBanner";

  export default {
    layout: 'general',
    components: {
      ourWork,
      homeBanner,
      latestArticles,
      publicationList,
      upcomingEvents
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: 'Jordan Open Source Association',
        meta: [{
            hid: 'home-page',
            name: 'Home Page',
            content: 'Jordan Open Source Association'
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
