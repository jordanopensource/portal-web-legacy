<template>
  <div>
    <h3>Speakers</h3>
    <div class="info" v-for="speaker in speakers" :key='speaker.id'>
      <appImage class="profilePicture" :image="speaker.picture" />
      <div>
        <p class="font-bold">{{ speaker.fullName }}</p>
        <p>{{ speaker.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'Speakers',
    props: {
      speakers: {
        type: Array,
        required: true
      }
    },
    components: {
      appImage
    }
  }

</script>

<style scoped>
  .info {
    @apply flex flex-no-wrap mt-4;
  }

</style>
