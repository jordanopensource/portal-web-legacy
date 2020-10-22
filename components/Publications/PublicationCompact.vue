<template>
  <div class="preview">
    <div>
      <h5 class="py-2">{{ publication.category['title_' + $i18n.locale] }}</h5>
      <nuxt-link :to="publicationLink">
        <h3 class="mb-4 text-3xl">{{ publication['title_' + $i18n.locale] }}</h3>
      </nuxt-link>
      <p class="text-josa-warm-grey-dark mb-2">
        {{ publication.publishDate ? publication.publishDate: publication.created_at | fullDate($i18n.locale) }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PublicationCompact',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    props: {
      publication: {
        type: Object,
        required: true
      }
    },
    computed: {
      publicationLink() {
        var title = ''
        if (this.publication['title_' + this.$i18n.locale]) {
          title = this.publication['title_' + this.$i18n.locale]
        } else {
          title = this.publication.title_en
        }
        const slug = this.$options.filters.stringToSlug(title)
        return this.localePath('/publications/' + this.publication.id + '/' + slug)
      }
    }
  }
</script>

<style scoped>
  h3 {
    @apply text-2xl font-bold;
  }
</style>