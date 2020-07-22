<template>
  <div class="featured my-8">
    <appImage v-if="article.thumbnail" class="thumbnail" :image="article.thumbnail" size="medium" />
    <img v-else class="thumbnail" :src="placeholderImage" />
    <div>
      <nuxt-link :to="articleLink">
        <h2 class="mb-4">{{ article.title }}</h2>
      </nuxt-link>
      <p v-if="article.excerpt" class="excerpt">{{article.excerpt}}
        <p v-else class="excerpt">{{article.body | truncate(200) }}</p>

        <div class="meta py-6">
          <nuxt-link :to="authorProfile">
            <appImage :image="article.author.profilePicture" size="small" class="profilePicture" />
          </nuxt-link>
          <div>
            <nuxt-link :to="authorProfile">
              <p class="font-bold">{{ article.author.fullName }}</p>
            </nuxt-link>
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
        return '/blog/' + this.article.id
      },
      authorProfile() {
        return '/members/' + this.article.author.id
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

  .profilePicture {
    display: inline;
    width: 50px;
    max-height: 60px;
    border-radius: 45%;
    margin-right: 1rem;
  }

  .excerpt {
    @apply font-bold opacity-80 leading-tight;
  }
</style>
