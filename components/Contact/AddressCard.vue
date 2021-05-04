<template>
  <div class="address-card container">
    <div class="px-6 md:px-12 py-20">
      <h2 class="mb-12">{{ $t('contact.address') }}</h2>
      <div class="flex flex-wrap md:flex-no-wrap justify-between">
        <div class="mb-6 w-full sm:ltr:pr-12 md:ltr:pr-20 lg:ltr:pr-32 sm:rtl:pl-12 md:rtl:pl-20 lg:rtl:pl-32">
          <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
          <div class="ltr:pl-8 rtl:pr-8">
            <p>{{ info.address['addressOne_' + $i18n.locale] }}</p>
            <p>{{ info.address['addressTwo_' + $i18n.locale] }}</p>
            <p class="mt-4">{{ info.address['street_' + $i18n.locale] }}, {{ info.address['city_' + $i18n.locale] }}</p>
          </div>
        </div>
        <div class="mb-6 w-full">
          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
            <div class="ltr:pl-10 rtl:pr-10">
              <h5>{{ $t('contact.workingHours') }}:</h5>
              <p>{{ info.workingTime.from | day($i18n.locale) }} - {{ info.workingTime.to | day($i18n.locale) }}</p>
              <p>{{ $t('timeCard.from') }} {{ info.workingTime.from | time($i18n.locale) }} {{ $t('timeCard.to') }}
                {{ info.workingTime.to | time($i18n.locale) }}</p>
            </div>
          </div>
          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'phone-alt']" />
            <div class="ltr:pl-10 rtl:pr-10">
              <h5>{{ $t('contact.voice') }}:</h5>
              <p><bdo dir="ltr">{{ info.phone }}</bdo></p>
            </div>
          </div>
          <div class="mb-6">
            <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
            <div class="ltr:pl-10 rtl:pr-10">
              <h5>{{ $t('contact.email') }}:</h5>
              <p>{{ info.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    @apply text-josa-warm-grey-dark text-2xl;
  }

  [dir="ltr"] .icon {
    @apply mr-3 float-left;
  }

  [dir="rtl"] .icon {
    @apply ml-3 float-right;
  }
</style>