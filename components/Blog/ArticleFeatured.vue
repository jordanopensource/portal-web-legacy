<template>
  <div class="featured my-8">
    <nuxt-link :to="articleLink">
      <appImage v-if="article.thumbnail" class="thumbnail" :image="article.thumbnail" size="medium" />
      <img v-else class="thumbnail" :src="placeholderImage" />
    </nuxt-link> 
    <div>
      <nuxt-link :to="articleLink">
        <h3 class="mb-4">{{ article.title }}</h3>
      </nuxt-link>
      <div v-if="article.authors.length || article.translators.length" class="flex flex-no-wrap items-center flex-row mb-t mb-4">
        <template v-if="article.authors.length">
          <p class="text-sm opacity-80 ltr:mr-4 rtl:ml-4">
          {{ article.publishDate ? article.publishDate: article.created_at | fullDate($i18n.locale) }}</p>
          <author v-for="author in article.authors" :key="author.id" class="mb-4 ltr:mr-2 rtl:ml-2 flex-shrink-0"
            :name="author['name_' + $i18n.locale]" :picture="author.picture" />
        </template>
        <template v-if="article.translators.length">
          <author v-for="translator in article.translators" :key="translator.id"
            class="ltr:mr-2 rtl:ml-2 flex-shrink-0" :name="translator['name_' + $i18n.locale]"
            :picture="translator.picture" :translatedBy="true" v-bind:writtenBy="false" />
        </template>
      </div>
      <p v-if="article.excerpt" class="excerpt">{{article.excerpt}}</p>
      <p v-else class="excerpt">{{article.body | truncate(200) }}</p>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import author from '~/components/Blog/AuthorFeatured';
  export default {
    name: 'BlogPreview',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage,
        author
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
    },
    mounted() {
      this.$store.commit('setFeaturedBlogs', this.article.id)
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
    @apply font-medium opacity-80;
  }


</style>
