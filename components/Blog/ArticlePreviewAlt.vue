<template>
  <div class="preview flex flex-wrap lg:flex-no-wrap">
    <nuxt-link tag="a" :to="articleLink" class="thumbnail">
      <appImage v-if="article.thumbnail" :image="article.thumbnail" size="medium" />
      <img v-else :src="placeholderImage" />
    </nuxt-link>
    <div class="flex-grow">
      <nuxt-link :to="articleLink">
        <h3 class="mb-4">{{ article.title }}</h3>
      </nuxt-link>
      <p class="display-faded mb-2">
        <span>{{ article.publishDate ? article.publishDate: article.created_at | fullDate($i18n.locale) }}</span>
        <span v-if="typeof article.author == 'object' && article.author !== null">{{ $t('meta.by') }}
          {{article.author['name_' + $i18n.locale]}}</span>
      </p>
      <p v-if="article.excerpt">{{article.excerpt}}</p>
      <p v-else>{{article.body | truncate(250) }}</p>
      <nuxt-link :to="articleLink"
        class="py-4 display-more">
        {{ $t('meta.readMore') }}
        <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
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
        placeholderImage: process.env.bucketUrl + '/josabots_88f0a93786.jpeg'
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
      arrowIcon() {
        if (this.$i18n.locale == "ar") {
          return 'long-arrow-alt-left'
        } else {
          return 'long-arrow-alt-right'
        }
      }
    }
  }
</script>

<style scoped>
</style>