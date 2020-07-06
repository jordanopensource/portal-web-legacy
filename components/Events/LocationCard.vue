<template>
  <div class="location-card">
    <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
    <div>
      <p class="font-bold leading-none">{{ $t('locationCard.title') }}</p>
      <p>{{ location }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Location',
    props: {
      location: {
        type: String,
        required: true
      }
    }
  }

</script>

<style scoped>
  .location-card {
    @apply bg-josa-warm-grey-light p-8 flex align-top;

  }
  .icon {
    @apply text-josa-warm-grey-dark text-2xl mr-3;
  }
</style>
