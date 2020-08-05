<template>
  <div class="featured my-8">
    <appImage v-if="article.thumbnail" class="thumbnail" :image="article.thumbnail" size="medium" />
    <img v-else class="thumbnail" :src="placeholderImage" />
    <div>
      <nuxt-link :to="articleLink">
        <h2 class="mb-4">{{ article.title }}</h2>
      </nuxt-link>
      <p v-if="article.excerpt" class="excerpt">{{article.excerpt}}</p>
      <p v-else class="excerpt">{{article.body | truncate(200) }}</p>
      <div v-if="article.author" class="meta py-6">
        <appImage :image="article.author.profilePicture" size="small" class="profilePicture" />
        <div>
          <p class="font-bold">{{ article.author.fullName }}</p>
          <div class="text-josa-warm-grey-dark">{{ article.created_at | fullDate($i18n.locale) }}</div>
        </div>
      </div>

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
      },
      authorProfile() {
        return this.localePath('/members/' + this.article.author.id)
      },
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
