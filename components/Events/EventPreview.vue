<template>
  <div class="card">
    <appImage v-if="thumbnail" :image="thumbnail" 
    size="small" />
    <nuxt-link :to="eventLink">
      <h3>{{ name }}</h3>
    </nuxt-link>
      <div>{{ date | dateTime }}</div>
      <div>{{ location }}</div>
      <div>{{ description }}</div>
  </div>
</template>

<script>
import appImage from '~/components/UI/appImage';
export default {
  name: 'EventPreview',
  components: {
    appImage
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnail: {
      type: Object
    }
  },
  computed: {
    eventLink() {
      return '/events/' + this.id
    },
  }
}
</script>


<style scoped>

</style>
