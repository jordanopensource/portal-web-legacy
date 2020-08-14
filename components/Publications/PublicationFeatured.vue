<template>
  <div class="preview grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 col-gap-8 row-gap-4">
    <div>
      <nuxt-link :to="publicationLink">
        <h2 class="mb-4 text-3xl">{{ publication['title_' + $i18n.locale] }}</h2>
      </nuxt-link>
      <p v-if="publication['excerpt_' + $i18n.locale]">{{ publication['excerpt_' + $i18n.locale] }}</p>
    </div>
    <nuxt-link tag="div" :to="publicationLink">
      <appImage v-if="publication.thumbnail" :image="publication.thumbnail" size="medium" class="preview-image" />
      <img v-else :src="placeholderImage" class="preview-image" />
    </nuxt-link>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'BlogPreview',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage
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
  [lang="en"] p {
    @apply leading-golden;
  }

  [lang="ar"] p {
    @apply leading-normal;
  }

  .preview-image {
    @apply w-full object-cover object-center;
    height: 200px;
  }

</style>
