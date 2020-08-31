<template>
  <div :id="'program-' + program.id">
    <pageBanner :pageMeta="program" />
    <div class="container py-20">
      <!-- HTML Content -->
      <div v-if="program['content_' + $i18n.locale]" id="content">
        <div class="px-12">
          <div v-html="program['content_' + $i18n.locale]"></div>
        </div>
      </div>
      <div class="block py-8 px-12 my-4 border-josa-warm-grey-dark">
        <hr>
      </div>
      <!-- Featured Articles -->

      <!-- Trivia -->
      <trivia v-if="program.trivia[0]" :info="program.trivia[0]" />
      <div class="block py-8 px-12 my-4 border-josa-warm-grey-dark">
        <hr>
      </div>

      <!-- Trivia -->
      <trivia v-if="program.trivia[1]" :info="program.trivia[1]" alt />
      <div class="block py-8 px-12 my-4 border-josa-warm-grey-dark">
        <hr>
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
  export default {
    name: 'ProgramSingle',
    components: {
      pageBanner,
      trivia,
      upcomingEvents
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
