<template>
  <div class="bg-josa-warm-grey-light">
    <div class="container">
      <div class="px-6 md:px-12 p-20 flex flex-wrap md:flex-no-wrap justify-between">
        <div class="w-full sm:ltr:pr-12 md:ltr:pr-20 lg:ltr:pr-32 sm:rtl:pl-12 md:rtl:pl-20 lg:rtl:pl-32">
          <h4>{{ $t('feedback.title') }}</h4>
          <p>{{ $t('feedback.description') }}</p>
          <p>{{ $t('feedback.fillForm') }}</p>
        </div>

      <feedbackForm class="w-full"/>
      </div>
    </div>
  </div>
</template>

<script>
  import feedbackForm from '~/components/Contact/FeedbackForm.vue';
  export default {
    name: 'Feedback',
    components: {
      feedbackForm
    }
  }

</script>

<style scoped>
  h4 {
    @apply mb-20;
  }

  p {
    @apply mb-8;
  }

</style>
