<template>
  <div class="preview my-8 flex flex-wrap lg:flex-no-wrap">
    <nuxt-link tag="a" :to="articleLink" class="thumbnail">
      <appImage v-if="article.thumbnail" :image="article.thumbnail" size="medium" />
      <img v-else :src="placeholderImage" />
    </nuxt-link>
    <div class="flex-grow">
      <h5 class="uppercase py-2 lg:pt-0">
        <span v-for="(topic, index) in article.topics" :key="topic.id">
          {{ topic['title_' + $i18n.locale] }}{{ index != Object.keys(article.topics).length - 1 ? ', ' : ''}}
        </span>
      </h5>
      <nuxt-link :to="articleLink">
        <h3 class="mb-2">{{ article.title }}</h3>
      </nuxt-link>
      <div v-if="article.authors.length || article.translators.length" class="flex flex-no-wrap items-center flex-row mb-t mb-2">
        <template v-if="article.authors.length">
          <h6 class="ltr:mr-8 rtl:ml-8 mt-4">
          {{ article.publishDate ? article.publishDate: article.created_at | fullDate($i18n.locale) }}</h6>
          <author v-for="author in article.authors" :key="author.id" class="ltr:mr-8 rtl:ml-8 flex-shrink-0"
            :name="author['name_' + $i18n.locale]" :picture="author.picture" />
        </template>
        <template v-if="article.translators.length">
          <author v-for="translator in article.translators" :key="translator.id"
            class="ltr:mr-8 rtl:ml-8 flex-shrink-0" :name="translator['name_' + $i18n.locale]"
            :picture="translator.picture" :translatedBy="true" v-bind:writtenBy="false" />
        </template>
      </div>
      <p v-if="article.excerpt">{{article.excerpt}}</p>
      <p v-else>{{article.body | truncate(200) }}</p>
      <nuxt-link :to="articleLink" class="py-4 display-more">
        {{ $t('meta.readTheReport') }}
        <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
      </nuxt-link>
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
  [lang="en"] p {
    @apply leading-normal;
  }

  [lang="ar"] p {
    @apply leading-normal;
  }
</style>