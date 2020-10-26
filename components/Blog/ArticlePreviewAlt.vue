<template>
  <div class="preview flex flex-wrap lg:flex-no-wrap">
    <nuxt-link tag="a" :to="articleLink" class="thumbnail">
      <appImage v-if="article.thumbnail" :image="article.thumbnail" size="medium" />
      <img v-else :src="placeholderImage" />
    </nuxt-link>
    <div class="flex-grow">
      <nuxt-link :to="articleLink">
        <h3 class="mb-4 text-3xl font-bold">{{ article.title }}</h3>
      </nuxt-link>
      <p class="text-josa-warm-grey-dark mb-2">
        <span>{{ article.publishDate ? article.publishDate: article.created_at | fullDate($i18n.locale) }}</span>
        <span v-if="typeof article.author == 'object' && article.author !== null">{{ $t('meta.by') }} {{article.author['name_' + $i18n.locale]}}</span>
      </p>
      <p v-if="article.excerpt">{{article.excerpt}}</p>
      <p v-else>{{article.body | truncate(250) }}</p>
      <nuxt-link :to="articleLink"
        class="block py-4 text-josa-blue font-bold ltr:text-sm rtl:text-base hover:opacity-75">
        {{ $t('meta.readMore') }} >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'BlogPreviewAlt',
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
  h3 {
    @apply font-bold;
  }

  [lang="en"] p {
    @apply leading-normal;
  }

  [lang="ar"] p {
    @apply leading-normal;
  }
</style>