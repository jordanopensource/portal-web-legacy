<template>
  <div>
    <locationMap v-if="address.latitude && address.longitude" :latitude="address.latitude" :longitude="address.longitude" :mLongitude="address.markerLongitude"
      :mLatitude="address.markerLatitude" />
    <div class="location-card">
      <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'map-marker-alt']" />
      <div>
        <p class="font-bold ltr:leading-none rtl:leading-tight">{{ $t('locationCard.title') }}</p>
        <p v-if="address['addressOne_' + $i18n.locale]">{{ address['addressOne_' + $i18n.locale] }}</p>
        <p v-else>{{ address['addressOne_en'] }}</p>
        <p v-if="address['addressTwo_' + $i18n.locale]" class="pt-1">{{ address['addressTwo_' + $i18n.locale] }}</p>
        <p v-if="address['street_' + $i18n.locale]" class="pt-2">{{ address['street_' + $i18n.locale] }}<span v-if="address['city_' + $i18n.locale]">, {{ address['city_' + $i18n.locale] }}</span><span v-else>, {{ address['city_en'] }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  import locationMap from '~/components/Map/LocationMap';
  export default {
    name: 'Location',
    props: {
      address: {
        type: Object,
        required: true
      }
    },
    components: {
      locationMap
    },
  }

</script>

<style scoped>
  .location-card {
    @apply bg-josa-warm-grey-light p-8 flex align-top;

  }

  .icon {
    @apply text-josa-warm-grey-dark text-2xl;
  }

</style>
