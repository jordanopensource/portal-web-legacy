<template>
  <div>
    <!-- Banner -->
    <homeBanner :pageMeta="pageInfo" :programs="programs" />
    <!-- Latest Articles -->
    <div class="container">
      <div class="row">
        <articlesSpotlight class="w-full p-6 md:p-12" :numberOfArticles="4" :language="$i18n.locale"
          :title="$t('blog.spotlight')" tag="spotlight" />
      </div>
    </div>
    <!-- Join Us -->
    <joinUs class="mt-12" />
    <!-- Impact -->
    <div class="container">
      <div class="row">
        <ourWork v-if="$fetchState.timestamp && programs.length" class="w-full p-6 md:p-12" :title="$t('impact.title')"
          :programs="programs" />
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
    <!-- Upcoming Events -->
    <div class="container">
      <div class="row pb-20">
        <upcomingEvents :title="$t('events.upcoming')" category="all" :numberOfEvents="2" />
      </div>
    </div>
  </div>
</template>

<script>
  import articlesSpotlight from "~/components/Blog/ArticlesSpotlight";
  import lastestPublications from '~/components/Publications/LastestPublications';
  import upcomingEvents from '~/components/Events/UpcomingEvents';
  import ourWork from '~/components/Programs/OurWork';
  import homeBanner from "~/components/UI/HomeBanner";
  import joinUs from "~/components/JoinUs/JoinUs";


  export default {
    layout: 'general',
    data() {
      return {
        programs: []
      }
    },
    components: {
      ourWork,
      homeBanner,
      articlesSpotlight,
      lastestPublications,
      upcomingEvents,
      joinUs
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association',
        meta: [{
            name: 'description',
            content: this.pageInfo['metaDescription_' + this.$i18n.locale] ? this.pageInfo['metaDescription_' + this
              .$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageInfo() {
        return this.$store.state.pages.home
      }
    },
    async fetch() {
      let list = this.$store.state.programs.list
      if (!list) {
        await this.$store.dispatch("programs/fetch")
      }
      this.programs = this.$store.state.programs.list
    }
  }
</script>

<style scoped>
  .grey-light {
    @apply bg-josa-warm-grey-light;
  }
</style>