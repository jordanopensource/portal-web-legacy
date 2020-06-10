<template>
  <div class="featured my-8">
    <appImage v-if="article.thumbnail" class="thumbnail" :image="article.thumbnail" size="medium" />
    <img v-else class="thumbnail" :src="placeholderImage" />
    <div class="">
      <h3 class="uppercase py-2 md:pt-0 text-sm">featured</h3>
      <nuxt-link :to="articleLink">
        <h2 class="mb-4">{{ article.title }}</h2>
      </nuxt-link>
      <p v-if="article.excerpt" class="text-sm">{{article.excerpt}}
        <p v-else class="text-sm">{{article.body | truncate(200) }}</p>

        <div class="meta py-4">
          <nuxt-link :to="authorProfile">
            <appImage :image="article.author.profilePicture" size="small" class="profilePicture" />
          </nuxt-link>
          <div>
            <nuxt-link :to="authorProfile">
              <p class="font-bold">{{ article.author.fullName }}</p>
            </nuxt-link>
            <div class="text-josa-warm-grey-dark">{{ article.created_at | fullDate }}</div>
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
        return '/blogs/' + this.article.id
      },
      authorProfile() {
        return '/members/' + this.article.author.id
      },
    }
  }

</script>

<style scoped>
  .thumbnail {
    @apply mb-4 w-full
  }
  .meta {
    @apply flex items-center mb-12 text-sm
  }

  .profilePicture {
    display: inline;
    width: 50px;
    max-height: 60px;
    border-radius: 45%;
    margin-right: 1rem;
  }
</style>
