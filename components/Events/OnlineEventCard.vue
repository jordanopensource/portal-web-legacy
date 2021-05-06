<template>
  <div>
    <div class="online-card">
      <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'globe']" />
      <h5>{{ $t('events.onlineEvent') }}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OnlineEvent'
    }

</script>

<style scoped>
  .online-card {
    @apply bg-josa-warm-grey-light p-8 flex flex-row align-top;
  }

  .icon {
    @apply text-josa-warm-grey-dark text-2xl;
  }

</style>
