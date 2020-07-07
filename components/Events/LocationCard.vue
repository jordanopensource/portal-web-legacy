<template>
  <div>
    <locationMap v-if="address.latitude && address.longitude" :latitude="address.latitude" :longitude="address.longitude" :mLongitude="address.markerLongitude"
      :mLatitude="address.markerLatitude" />
    <div class="location-card">
      <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
      <div>
        <p class="font-bold leading-none">{{ $t('locationCard.title') }}</p>
        <p v-if="address.addressOne">{{ address.addressOne }}</p>
        <p v-if="address.addressTwo" class="pt-1">{{ address.addressTwo }}</p>
        <p v-if="address.street" class="pt-2">{{ address.street }}<span v-if="address.city">, {{ address.city }}</span></p>
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
    @apply text-josa-warm-grey-dark text-2xl mr-3;
  }

</style>
