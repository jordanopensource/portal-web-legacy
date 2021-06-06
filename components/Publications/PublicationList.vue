<!-- Fetch and list publications based on publication categories-->
<template>
  <section>
    <publicationPreview v-for="item in currentPageList" :key="item.id" :id="item.id" :publication="item" />
    <Pagination :list="orderedList" @currentPage="setCurrentPage" />
  </section>
</template>

<script>
  import publicationPreview from '@/components/Publications/PublicationPreview';
  import Pagination from '@/components/UI/Pagination';
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    data() {
      return {
        currentPageList: [],
      }
    },
    components: {
      publicationPreview,
      Pagination,
    },
    props: {
      publicationsList: {
        type: Array,
        required: true
      },
      itemsPerPage: {
        type: Number,
        default: 5
      },
      sortBy: {
        type: Array,
        default: ['publishDate', -1],
      }
    },
    computed: {
      orderedList() {
        return this.orderBy(this.publicationsList, this.sortBy[0], this.sortBy[1])
      },
    },
    methods: {
      setCurrentPage(list) {
        this.currentPageList = list
      },
    }
  }
</script>