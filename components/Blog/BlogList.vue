<!-- Fetch and list blog articles based on blog categories-->
<template>
  <section v-if="ifNotEmpty()">
    <div v-if="featured">
      <articleFeatured v-for="article in loadedArticles" :key="article.id" :id="article.id" :article="article" />
    </div>
    <div v-else>
      <h2>{{ title }}</h2>
      <articlePreview v-for="article in loadedArticles" :key="article.id" :id="article.id" :article="article" />
      <!-- Pagination -->
      <div v-if="pageCount > 1" class="pagination pt-6 text-center border-t border-dotted">
        <span class="py-2" v-if="currentPage > 1"><a
            @click="fetchCurrentPage(currentPage - 1)">{{ $t('pagination.prev') }}</a></span>
        <span class="py-2 inline-flex ltr:text-left rtl:text-right"><a @click="fetchCurrentPage(i)"
            v-for="i in pageCount" :key="i" class="p-2" :class="i == currentPage ? 'active' : ''">{{ $t(i) }}</a></span>
        <span class="py-2" v-if="currentPage < pageCount"><a
            @click="fetchCurrentPage(currentPage + 1)">{{ $t('pagination.next') }}</a></span>
      </div>
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
        sortBy: 'publishDate:DESC',
        loadedArticles: [],
        currentPage: 1,
        start: 0,
        count: 0
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
      limit: {
        type: Number,
        default: 5
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
    computed: {
      pageCount() {
        return Math.ceil(this.count / this.limit)
      }
    },
    created() {
      this.fetchArticles()
      this.countArticles()
    },
    methods: {
      fetchCurrentPage(i) {
        this.currentPage = i
        this.start = this.limit * (this.currentPage - 1)
        this.fetchArticles()
      },
      query() {
        var args = []
        var query = ""
        if (this.start) {
          let q = "_start=" + this.start;
          args.push(q)
        }
        if (this.limit) {
          let q = "_limit=" + this.limit;
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
      async countArticles() {
        var args = []
        var query = ""
        if (this.category && this.category != "all") {
          let q = "category.name=" + this.category;
          args.push(q)
        }
        if (this.language) {
          let q = "language=" + this.language;
          args.push(q)
        }
        query = args.join("&")
        await axios
          .get(process.env.baseUrl + "/blogs?" + query)
          .then(res => {
            this.count = res.data.length
          })
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedArticles) && this.loadedArticles.length)
          return true;
        else
          return false;
      },
      limitNumberWithinRange(num, min, max) {
        return Math.min(Math.max(parseInt(num), min), max)
      },
      calculateCurrentPage(num) {
        this.currentPage = this.limitNumberWithinRange(num, 1, this.pageCount())
        return this.currentPage
      }
    },
  }
</script>


<style scoped>
  .pagination a.active {
    @apply text-josa-blue-veryDark;
  }
</style>