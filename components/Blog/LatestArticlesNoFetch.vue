<template>
  <div v-if="ifNotEmpty()">
    <h2>{{ title }}</h2>
    <div class="md:grid md:grid-cols-2 col-gap-8 row-gap-0">
      <articleLatest v-for="article in limitBy(orderBy(filteredByLanguage, 'publishDate', -1), numberOfArticles)"
        :key="article.id" :id="article.id" :article="article" />
    </div>
  </div>
</template>

<script>
  import articleLatest from '~/components/Blog/ArticleLatestWithExcerpt';
  import Vue2Filters from 'vue2-filters';

  export default {
    mixins: [Vue2Filters.mixin],
    data() {
      return {
        loadedArticles: [],
      }
    },
    components: {
      articleLatest
    },
    props: {
      articles: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      numberOfArticles: {
        type: Number,
        default: 1
      },
    },
    computed: {
      filteredByLanguage() {
        const allArticles = this.articles;
        const byLang = allArticles.filter(a => a.language == this.$i18n.locale);
        return byLang
      }
    },
    methods: {
      ifNotEmpty() {
        if (Array.isArray(this.articles) && this.articles.length)
          return true;
        else
          return false;
      }
    },
  }

</script>
<style scoped>
  .button {
    @apply normal-case
  }

</style>
