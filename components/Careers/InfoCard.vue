<template>
  <div class="p-4 bg-josa-warm-grey-light">
    <div class="info-card">
      <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'clock']" />
      <div>
        <p class="font-bold leading-none">{{ $t('careers.publishDate') }}</p>
        <p>{{ career.publishDate | dayFullDate($i18n.locale) }}</p>
      </div>
    </div>
    <div class="info-card">
      <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'map-marker-alt']" />
      <div>
        <p class="font-bold leading-none">{{ $t('locationCard.title') }}</p>
        <p>{{ career['location_' + $i18n.locale] }}</p>
      </div>
    </div>
    <div class="info-card">
      <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'clipboard-list']" />
      <div>
        <p class="font-bold leading-none">{{ $t('careers.type') }}</p>
        <p>{{ career.careerType['title_' + $i18n.locale] }}/ {{ career['period_' + $i18n.locale] }} </p>
      </div>
    </div>
    <div class="info-card">
      <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'user']" />
      <div>
        <p class="font-bold leading-none">{{ $t('careers.team') }}</p>
        <p>{{ career.team['title_' + $i18n.locale] }}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'InfoCard',
    props: {
      career: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style scoped>
  .info-card {
    @apply m-6 flex align-top;

  }

  .icon {
    @apply text-josa-warm-grey-dark text-2xl;
  }

</style>
