<!-- Fetch and list latest blog articles from all categories-->
<template>
  <div v-if="ifNotEmpty()">
    <h2>{{ title }}</h2>
    <div class="md:grid md:grid-cols-2 col-gap-8 row-gap-0">
      <articleLatest v-for="article in loadedArticles" :key="article.id" :id="article.id" :article="article" />
    </div>
    <div class="text-center">
    <nuxt-link to="/blog" class="button button-blue-full mt-4">{{ $t('blog.more') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
  import articleLatest from '@/components/Blog/ArticleLatest';
  import axios from 'axios';
  export default {
    data() {
      return {
        sortBy: 'publishDate:DESC',
        loadedArticles: [],
      }
    },
    components: {
      articleLatest
    },
    props: {
      title: {
        type: String,
        required: true
      },
      numberOfArticles: {
        type: Number,
        default: 1
      },
      language: {
        type: String,
        required: true
      },
    },
    created() {
      this.fetchArticles()
    },
    methods: {
      query() {
        var args = []
        var query = ""
        if (this.numberOfArticles) {
          let q = "_limit=" + this.numberOfArticles;
          args.push(q)
        }
        if (this.sortBy) {
          let q = "_sort=" + this.sortBy;
          args.push(q)
        }
        if (this.language) {
          let q = "language=" + this.language;
          args.push(q)
        }
        query = args.join("&")
        return query
      },
      async fetchArticles() {
        const query = this.query()
        await axios
          .get(process.env.baseUrl + "/blogs?" + query)
          .then(res => {
            const articlesArray = []
            for (const key in res.data) {
              articlesArray.push({
                ...res.data[key]
              })
            }
            this.loadedArticles = articlesArray
          })
          .catch(e => this.context.error(e));
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedArticles) && this.loadedArticles.length)
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
