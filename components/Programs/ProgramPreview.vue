<template>
  <div class="flex items-start">
    <appImage class="block max-w-full ltr:mr-4 rtl:ml-4 w-20 h-auto flex-shrink-0" v-if="program.picture"
      :image="program.picture" />
    <div class="mb-6 flex-grow">
      <h3 class="mb-6 uppercase">{{ program['title_' + $i18n.locale] }}</h3>
      <p class="mb-6" v-if="program['description_' + $i18n.locale]" v-html="$md.render(program['description_' + $i18n.locale])"></p>
      <p class="mb-6" v-else v-html="$md.render(program['description_en'])"></p>
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

</style>
