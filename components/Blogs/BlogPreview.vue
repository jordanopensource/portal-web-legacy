<template>
  <div class="card">
    <nuxt-link :to="blogLink">
      <h3>{{ title }}</h3>
    </nuxt-link>
    <div>{{ created_at | dateTime }}</div>
  </div>
</template>

<script>
  export default {
    name: 'BlogPreview',
    props: {
      id: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      created_at: {
        type: String,
        required: true
      }
    },
    computed: {
      blogLink() {
        return '/blogs/' + this.id
      },
    }
  }

</script>


<style scoped>

</style>
