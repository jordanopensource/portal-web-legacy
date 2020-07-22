<template>
  <div class="address-card container">
    <div class="px-12 py-20">
      <h4 class="mb-12">{{ $t('contact.address') }}</h4>

      <div class="flex flex-wrap md:flex-no-wrap justify-between">

        <div class="mb-6 w-full sm:pr-12 md:pr-20 lg:pr-32">
          <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
          <div class="pl-8">
            <p>{{ info.address['addressOne_' + $i18n.locale] }}</p>
            <p>{{ info.address['addressTwo_' + $i18n.locale] }}</p>
            <p class="mt-4">{{ info.address['street_' + $i18n.locale] }}, {{ info.address['city_' + $i18n.locale] }}</p>
          </div>
        </div>

        <div class="mb-6 w-full">

          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
            <div class="pl-8">
              <p class="font-bold">{{ $t('contact.workingHours') }}:</p>
              <p>{{ info.workingTime.from | day($i18n.locale) }} - {{ info.workingTime.to | day($i18n.locale) }}</p>
              <p>{{ $t('timeCard.from') }} {{ info.workingTime.from | time($i18n.locale) }} {{ $t('timeCard.to') }} {{ info.workingTime.to | time($i18n.locale) }}</p>
            </div>
          </div>

          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'phone-alt']" />
            <span>
              <span class="font-bold">{{ $t('contact.voice') }}:</span>
              <span>{{ info.phone }}</span>
            </span>
          </div>

          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
            <span>
              <span class="font-bold">{{ $t('contact.email') }}:</span>
              <span>{{ info.email }}</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    }
  }

</script>

<style scoped>
  .icon {
    @apply text-josa-warm-grey-dark text-2xl mr-3 float-left;
  }

  p {
    @apply
  }

</style>
