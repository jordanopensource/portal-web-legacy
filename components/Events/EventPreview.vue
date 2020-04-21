<template>
  <div class="card">
    <nuxt-link :to="eventLink">
      <h3>{{ name }}</h3>
    </nuxt-link>
      <div>{{ date }}</div>
      <div>{{ location }}</div>
      <div>{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'EventPreview',
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
    }
  },
  computed: {
    eventLink() {
      return '/events/' + this.id
    }
  }
}
</script>


<style scoped>

</style>
