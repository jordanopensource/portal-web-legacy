<template>
  <div class="mt-8">
    <appImage class="w-full mb-4 px-8 bot mx-auto" v-if="program.picture" :image="program.picture" />
    <h2 class="text-3xl m-0">
      {{ program['title_' + $i18n.locale] ? program['title_' + $i18n.locale] : program['title_en'] }}</h2>
    <p class="py-2 px-4">{{ program['excerpt_' + $i18n.locale] ? program['excerpt_' + $i18n.locale] : program['excerpt_en']}}</p>
  </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    components: {
      appImage
    },
    props: {
      program: {
        type: Object,
        required: true
      },
    },
  }

</script>

<style scoped>
.bot{
  width: 250px;
}
</style>
