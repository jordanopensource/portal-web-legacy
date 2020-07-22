<template>
  <div class="time-card">
    <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
    <div>
      <p class="font-bold leading-none">{{ $t('timeCard.title') }}</p>
      <p>{{ from | dayFullDate($i18n.locale) }}</p>
      <p>{{ $t('timeCard.from') }} {{ from | time($i18n.locale) }} {{ $t('timeCard.to') }} {{ to | time($i18n.locale) }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimeCard',
    props: {
      from: {
        required: true
      },
      to: {
        required: true
      }
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
