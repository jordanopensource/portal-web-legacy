<!-- Fetch and list careers based on career types-->
<template>
  <section v-if="ifNotEmpty()">
    <h2 v-if="title">{{ title }}</h2>
    <careerPreview v-for="career in loadedCareers" :key="career.id" :id="'career' + career.id" :career="career" />
    <!-- Pagination -->
    <div v-if="pageCount > 1" class="pagination pt-6 text-center border-t border-dotted">
      <span class="py-2" v-if="currentPage > 1"><a
          @click="fetchCurrentPage(currentPage - 1)">{{ $t('pagination.prev') }}</a></span>
      <span class="py-2 inline-flex ltr:text-left rtl:text-right"><a @click="fetchCurrentPage(i)" v-for="i in pageCount"
          :key="i" class="p-2" :class="i == currentPage ? 'active' : ''">{{ $t(i) }}</a></span>
      <span class="py-2" v-if="currentPage < pageCount"><a
          @click="fetchCurrentPage(currentPage + 1)">{{ $t('pagination.next') }}</a></span>
    </div>
  </section>
</template>

<script>
  import careerPreview from '@/components/Careers/CareerPreview';
  import axios from 'axios';

  export default {
    data() {
      return {
        sortBy: 'publishDate:DESC',
        loadedCareers: [],
        currentPage: 1,
        start: 0,
        count: 0
      }
    },
    components: {
      careerPreview
    },
    props: {
      title: {
        type: String
      },
      careerType: {
        type: String,
        required: true
      },
      limit: {
        type: Number,
        default: 10
      }
    },
    computed: {
      pageCount() {
        return Math.ceil(this.count / this.limit)
      }
    },
    created() {
      this.fetchCareers()
      this.countCareers()
    },
    methods: {
      fetchCurrentPage(i) {
        this.currentPage = i
        this.start = this.limit * (this.currentPage - 1)
        this.fetchCareers()
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
        if (this.careerType && this.careerType != "all") {
          let q = "careerType.name=" + this.careerType;
          args.push(q)
        }
        query = args.join("&")
        return query
      },
      async fetchCareers() {
        const query = this.query()
        await axios
          .get(process.env.baseUrl + "/careers?" + query)
          .then(res => {
            const careersArray = []
            for (const key in res.data) {
              careersArray.push({
                ...res.data[key]
              })
            }
            this.loadedCareers = careersArray
          })
          .catch(e => this.context.error(e));
      },
      async countCareers() {
        var args = []
        var query = ""
        if (this.careerType && this.careerType != "all") {
          let q = "careerType.name=" + this.careerType;
          args.push(q)
        }
        query = args.join("&")
        await axios
          .get(process.env.baseUrl + "/careers?" + query)
          .then(res => {
            this.count = res.data.length
          })
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedCareers) && this.loadedCareers.length)
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
    }
  }
</script>

<style scoped>
  .pagination a.active {
    @apply text-josa-blue-veryDark;
  }
</style>