<!-- Fetch and list blog articles based on blog categories-->
<template>
  <section v-if="ifNotEmpty()">
    <div v-if="featured">
      <articleFeatured v-for="article in loadedArticles" :key="article.id" :id="article.id" :article="article" />
    </div>
    <div v-else>
      <h3>{{ title }}</h3>
      <articlePreview v-for="article in loadedArticles" :key="article.id" :id="article.id" :article="article" />
    </div>
  </section>
</template>

<script>
  import articlePreview from '@/components/Blog/ArticlePreview';
  import articleFeatured from '@/components/Blog/ArticleFeatured';
  import axios from 'axios';
  export default {
    data() {
      return {
        sortBy: 'created_at:DESC',
        loadedArticles: [],
      }
    },
    components: {
      articlePreview,
      articleFeatured
    },
    props: {
      title: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      numberOfArticles: {
        type: Number,
        default: 1
      },
      featured: {
        type: Boolean,
        default: false
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
        if (this.category && this.category != "all") {
          let q = "category.name=" + this.category;
          args.push(q)
        }
        if (this.featured) {
          let q = "tags_contains=featured"
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
