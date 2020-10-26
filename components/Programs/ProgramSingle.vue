<template>
  <div :id="'program-' + program.id">
    <pageBanner :pageMeta="program" />
    <div class="container py-20">
      <!-- HTML Content -->
      <div v-if="program['content_' + $i18n.locale]" id="content" class="px-12">
        <div v-html="program['content_' + $i18n.locale]"></div>
        <div class="block py-8 my-4 border-josa-warm-grey-dark">
          <hr>
        </div>
      </div>
      <!-- Highlighted Activities -->
      <activitiesList v-if="ifActivities" :activities="program.activities" :title="$t('activities.highlighted')"
        class="px-12" />
      <div v-if="ifActivities" class="block py-8 my-4 mx-12 border-josa-warm-grey-dark">
        <hr>
      </div>
      <!-- Featured Articles -->
      <latestArticles :articles="filteredByLanguage" :numberOfArticles="2" :title="$t('blog.featured')" class="px-12" />
      <div v-if="ifNotEmpty()" class="block py-8 my-4 mx-12 border-josa-warm-grey-dark">
        <hr>
      </div>
      <!-- Trivia -->
      <div v-if="program.trivia">
        <trivia v-if="program.trivia[0]" :info="program.trivia[0]" />
        <trivia v-if="program.trivia[1]" :info="program.trivia[1]" alt />
      </div>
      <!-- Upcoming Events -->
      <upcomingEvents :title="$t('events.upcoming')" category="all" :numberOfEvents="2" />
    </div>
  </div>
</template>

<script>
  import pageBanner from "~/components/UI/PageBannerNoImage";
  import trivia from '~/components/UI/Trivia';
  import upcomingEvents from '~/components/Events/UpcomingEvents';
  import latestArticles from "~/components/Blog/LatestArticlesNoFetch";
  import activitiesList from '@/components/Activities/ActivitiesList';
  import Vue2Filters from 'vue2-filters';

  export default {
    name: 'ProgramSingle',
    components: {
      pageBanner,
      trivia,
      upcomingEvents,
      latestArticles,
      activitiesList
    },
    props: {
      program: {
        type: Object,
        required: true
      }
    },
    computed: {
      filteredByLanguage() {
        const allArticles = this.program.relatedArticles;
        const byLang = allArticles.filter(a => a.language == this.$i18n.locale);
        return byLang
      }
    },
    methods: {
      ifNotEmpty() {
        if (Array.isArray(this.filteredByLanguage) && this.filteredByLanguage.length)
          return true;
        else
          return false;
      },
      ifActivities() {
        if (Array.isArray(this.program.activities) && this.program.activities.length)
          return true;
        else
          return false;
      }
    },
  }
</script>

<style scoped>
  #content>>>p,
  #content>>>h3 {
    @apply mb-4;
  }
</style>