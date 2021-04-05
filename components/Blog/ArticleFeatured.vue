<template>
  <div class="featured my-8">
    <nuxt-link :to="articleLink">
      <appImage v-if="article.thumbnail" class="thumbnail" :image="article.thumbnail" size="medium" />
      <img v-else class="thumbnail" :src="placeholderImage" />
    </nuxt-link> 
    <div>
      <nuxt-link :to="articleLink">
        <h2 class="mb-4">{{ article.title }}</h2>
      </nuxt-link>
      <p v-if="article.excerpt" class="excerpt">{{article.excerpt}}</p>
      <p v-else class="excerpt">{{article.body | truncate(200) }}</p>
    </div>
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
      article: {
        type: Object,
        required: true
      }
    },
    computed: {
      articleLink() {
        const slug = this.$options.filters.stringToSlug(this.article.title)
        return this.localePath('/blog/' + this.article.id + '/' + slug)
      }
    }
  }

</script>

<style scoped>
  .thumbnail {
    @apply mb-6 w-full;
  }

  .meta {
    @apply flex items-center mb-12 text-sm;
  }

  .excerpt {
    @apply font-bold opacity-80;
  }

  [lang="en"] .excerpt {
    @apply leading-tight;
  }

  [lang="ar"] .excerpt {
    @apply leading-normal;
  }

</style>
