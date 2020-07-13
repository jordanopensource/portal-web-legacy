<template>
  <div class="time-card">
    <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
    <div>
      <p class="font-bold leading-none">{{ $t('publication.publishDate') }}</p>
      <p>{{ date | fullDate }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PublishDateCard',
    props: {
      date: {
        required: true
      },
    }
  }

</script>

<style scoped>
  .time-card {
    @apply bg-josa-warm-grey-light p-8 flex align-top;

  }

  .icon {
    @apply text-josa-warm-grey-dark text-2xl mr-3;
  }

</style>
