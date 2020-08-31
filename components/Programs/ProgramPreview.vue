<template>
  <div class="mt-8">
    <!-- <appImage class="w-full mb-4 px-8 bot mx-auto" v-if="program.picture" :image="program.picture" /> -->
    <nuxt-link :to="programLink">
      <h2 class="text-3xl m-0">
        {{ program['title_' + $i18n.locale] ? program['title_' + $i18n.locale] : program['title_en'] }}</h2>
    </nuxt-link>
    <p class="py-2 px-4">
      {{ program['description_' + $i18n.locale] ? program['description_' + $i18n.locale] : program['description_en']}}
    </p>
    <nuxt-link :to="programLink" class="block py-4 text-josa-blue font-bold ltr:text-sm rtl:text-base hover:opacity-75">{{ $t('meta.knowMore') }}</nuxt-link>
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
    computed: {
      programLink() {
        var title = ''
        if (this.program['title_' + this.$i18n.locale]) {
          title = this.program['title_' + this.$i18n.locale]
        } else {
          title = this.program.title_en
        }
        const slug = this.$options.filters.stringToSlug(title)
        return this.localePath('/programs/' + this.program.id + '/' + slug)
      }
    }
  }

</script>

<style scoped>
  .bot {
    width: 250px;
  }

</style>
