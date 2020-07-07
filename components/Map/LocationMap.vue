<template>
  <div id="map-wrap">
    <style>
      :root {
        --mapHeigh: {{ mapHeight }};
      }
    </style>
    <no-ssr>
      <l-map :zoom="zoom" :center="[latitude, longitude]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[mLatitudeComputed, mLongitudeComputed]" :icon="icon"></l-marker>
      </l-map>
    </no-ssr>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      icon: L.icon({
        iconUrl: '/logo/favicon.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      }),
      }
    },
    props: {
      longitude: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      },
      zoom: {
        type: Number,
        default: 15
      },
      mLongitude: {
        type: Number,
      },
      mLatitude: {
        type: Number,
      },
      mapHeight: {
        type: String,
        default: '250px'
      },
    },
    computed: {
      mLongitudeComputed() {
        return this.mLongitude || this.longitude
      },
      mLatitudeComputed() {
        return this.mLatitude || this.latitude
      }
    }
  }

</script>

<style>
  #map-wrap {
    height: var(--mapHeigh);
  }
</style>
