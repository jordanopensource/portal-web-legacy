<!-- Fetch and list blog articles based on blog categories-->
<template>
  <section>
    <h3>{{ title }}</h3>
    <articlePreview v-for="article in loadedArticles" :key="article.id" :id="article.id" :article="article" />
  </section>
</template>

<script>
  import articlePreview from '@/components/Blogs/ArticlePreview';
  import axios from 'axios';
  export default {
    data() {
      return {
        sortBy: 'created_at:DESC',
        loadedArticles: []
      }
    },
    components: {
      articlePreview
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
        required: true
      }
    },
    created() {
      this.fetchArticles()
    },
    updated() {
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
        if (this.category) {
          let q = "category.name=" + this.category;
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
      }
    }
  }

</script>
