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
      <!-- Featured Articles -->
      <latestArticles :numberOfArticles="2" :language="$i18n.locale" :title="$t('blog.featured')" class="px-12" />
      <div class="block py-8 my-4 border-josa-warm-grey-dark">
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
  import latestArticles from "~/components/Blog/LatestArticles";

  export default {
    name: 'ProgramSingle',
    components: {
      pageBanner,
      trivia,
      upcomingEvents,
      latestArticles
    },
    props: {
      program: {
        type: Object,
        required: true
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
