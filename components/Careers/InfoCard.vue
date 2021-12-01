<template>
  <div class="p-4 bg-josa-warm-grey-light">
    <div class="info-card">
      <div class="w-8">
        <font-awesome-icon class="fa-fw icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'calendar-day']" />
      </div>
      <div class="ltr:ml-3 rtl:mr-3">
        <h5 class="leading-none mb-1">{{ $t('careers.publishDate') }}</h5>
        <p>{{ career.publishDate | dayFullDate($i18n.locale) }}</p>
      </div>
    </div>
    <div class="info-card">
      <div class="w-8">
        <font-awesome-icon class="fa-fw icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'globe-europe']" />
      </div>
      <div class="ltr:ml-3 rtl:mr-3">
        <h5 class="leading-none mb-1">{{ $t('locationCard.title') }}</h5>
        <p>{{ career['location_' + $i18n.locale] }}</p>
      </div>
    </div>
    <div class="info-card">
      <div class="w-8">
        <font-awesome-icon class="fa-fw icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'file-signature']" />
      </div>
      <div class="ltr:ml-3 rtl:mr-3">
        <h5 class="leading-none mb-1">{{ $t('careers.type') }}</h5>
        <p>{{ career.careerType['title_' + $i18n.locale] }} {{ career['period_' + $i18n.locale] }} </p>
      </div>
    </div>
    <div class="info-card">
      <div class="w-8">
        <font-awesome-icon class="fa-fw icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'user-friends']" />
      </div>
      <div class="ltr:ml-3 rtl:mr-3">
        <h5 class="leading-none mb-1">{{ $t('careers.team') }}</h5>
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
