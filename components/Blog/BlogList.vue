<!-- Fetch and list blog articles based on blog categories-->
<template>
  <section v-if="ifNotEmpty()">
    <div v-if="featured">
      <articleFeatured v-for="article in loadedArticles" :key="article.id" :id="article.id" :article="article" />
    </div>
    <div v-else>
      <h2>{{ title }}</h2>
      <template v-for="article in loadedArticles">
        <template v-if="category=='all'">
          <articlePreview v-show="!featuredBlogs.has(article.id)" :key="article.id" :id="article.id" :article="article" />
        </template>
        <articlePreview v-else :key="article.id" :id="article.id" :article="article" />
      </template>
      <!-- Pagination -->
      <div class="pagination pt-6 text-center border-t border-dotted">
        <ul>
          <span class="px-3"><a @click="fetchCurrentPage(currentPage - 1)" :class="currentPage == 1 ? 'disabled' : ''">
              <font-awesome-icon :icon="$i18n.locale == 'ar' ? 'chevron-right' : 'chevron-left'"></font-awesome-icon>
            </a></span>
          <span v-for="i in pageCount" :key="i">
            <li v-if="(i == pageCount || i==1 || Math.abs(i - currentPage) < 3)">
              <a class="px-1" @click="fetchCurrentPage(i)"
                :class="{current: currentPage === i, last: (i == pageCount  && Math.abs(i - currentPage) > 3), first:(i == 1 && Math.abs(i - currentPage) > 3)}">
                {{i}}</a>
            </li>
          </span>
          <span class="px-3"><a @click="fetchCurrentPage(currentPage + 1)"
              :class="currentPage == pageCount ? 'disabled' : ''">
              <font-awesome-icon :icon="$i18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'"></font-awesome-icon>
            </a></span>
        </ul>
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
        count: 0,
        numberPerPage: 5
      }
    },
    components: {
      articlePreview,
      articleFeatured
    },
    props: {
      title: {
        type: String,
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
        return Math.ceil(this.count / this.numberPerPage)
      },
      featuredBlogs() {
        return this.$store.getters.getFeaturedBlogs
      }
    },
    created() {
      this.fetchArticles()
      this.countArticles()
    },
    methods: {
      fetchCurrentPage(i) {
        this.currentPage = this.limitNumberWithinRange(i, 1, this.pageCount)
        this.start = this.numberPerPage * (this.currentPage - 1)
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
        this.currentPage = this.limitNumberWithinRange(num, 1, this.pageCount)
        return this.currentPage
      }
    },
  }
</script>


<style scoped>
  .pagination a.disabled {
    @apply cursor-default text-josa-warm-grey;
  }

  .pagination a.disabled:hover {
    @apply text-josa-warm-grey;
  }

  .pagination a {
    @apply text-josa-warm-grey-dark;
  }

  .pagination .current {
    @apply bg-josa-blue-dark rounded-sm px-1 py-0 text-white;
  }

  .pagination ul {
    @apply p-0 list-none;
  }

  .pagination li {
    @apply inline m-1;
  }

  .pagination a.first::after {
    content: '  ...';
  }

  .pagination a.last::before {
    content: '... ';
  }
</style>