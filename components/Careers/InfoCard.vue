<template>
  <div class="p-4 bg-josa-warm-grey-light">
    <div class="info-card">
      <div class="w-8">
        <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'clock']" />
      </div>
      <div>
        <h5 class="leading-none mb-1">{{ $t('careers.publishDate') }}</h5>
        <p>{{ career.publishDate | dayFullDate($i18n.locale) }}</p>
      </div>
    </div>
    <div class="info-card">
      <div class="w-8 ltr:pl-1 rtl:pr-1">
        <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'map-marker-alt']" />
      </div>
      <div>
        <h5 class="leading-none mb-1">{{ $t('locationCard.title') }}</h5>
        <p>{{ career['location_' + $i18n.locale] }}</p>
      </div>
    </div>
    <div class="info-card">
      <div class="w-8 ltr:pl-1 rtl:pr-1">
        <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'clipboard-list']" />
      </div>
      <div>
        <h5 class="leading-none mb-1">{{ $t('careers.type') }}</h5>
        <p>{{ career.careerType['title_' + $i18n.locale] }}/ {{ career['period_' + $i18n.locale] }} </p>
      </div>
    </div>
    <div class="info-card">
      <div class="w-8 ltr:pl-1 rtl:pr-1">
        <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'user']" />
      </div>
      <div>
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
