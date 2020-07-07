<template>
  <div id="map-wrap" ref="mapWrap">
    <client-only>
      <l-map :zoom="zoom" :center="[latitude, longitude]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[mLatitudeComputed, mLongitudeComputed]" >
          <l-icon
          :icon-size="[32, 32]"
          :icon-anchor="[16, 16]"
          icon-url="/logo/favicon.png"
        />
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
  export default {
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
    },
    mounted() {
      this.$refs.mapWrap.style.height = this.mapHeight
    }
  }

</script>
