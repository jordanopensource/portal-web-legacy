<template>
  <div class="preview my-8 flex flex-wrap md:flex-no-wrap">
    <appImage v-if="article.thumbnail" class="thumbnail" :image="article.thumbnail" size="small" />
    <img v-else class="thumbnail" :src="placeholderImage" />
    <div class="flex-grow">
      <h3 class="uppercase py-2 md:pt-0 text-sm">
          <span v-for="(topic, index) in article.topics" :key="topic.id">
            {{ topic.name }}{{ index != Object.keys(article.topics).length - 1 ? ', ' : ''}}
          </span>
      </h3>
      <nuxt-link :to="articleLink">
        <h2 class="display-lead mb-4">{{ article.title }}</h2>
      </nuxt-link>
      <p v-if="article.excerpt" class="text-sm">{{article.excerpt}}
        <p v-else class="text-sm">{{article.body | truncate(200) }}</p>
        <nuxt-link :to="articleLink" class="block py-4 text-josa-blue font-bold text-sm hover:opacity-75">
          {{ $t('meta.readTheReport') }}
          <font-awesome-icon class="ml-2 align-middle" :icon="['fas', 'long-arrow-alt-right']" />
        </nuxt-link>
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
    }
  }

</script>

<style scoped>
  .preview .thumbnail {
    @apply w-full object-cover mb-4;
  }

  @screen md {
    .preview .thumbnail {
      @apply mr-6 mb-0;
      min-width: 250px;
      width: 250px;
      height: 175px;
    }
  }

</style>
