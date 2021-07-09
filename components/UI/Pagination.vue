<template>
  <div class="pagination pt-6 text-center border-t border-dotted">
    <ul>
      <span class="px-3"><a @click="emitCurrentPage(currentPage - 1)" :class="currentPage == 1 ? 'disabled' : ''">
          <font-awesome-icon :icon="$i18n.locale == 'ar' ? 'chevron-right' : 'chevron-left'"></font-awesome-icon>
        </a></span>
      <span v-for="i in pageCount" :key="i">
        <li v-if="(i == pageCount || i==1 || Math.abs(i - currentPage) < 3)">
          <a class="px-1" @click="emitCurrentPage(i)"
            :class="{current: currentPage === i, last: (i == pageCount  && Math.abs(i - currentPage) > 3), first:(i == 1 && Math.abs(i - currentPage) > 3)}">
            {{i}}</a>
        </li>
      </span>
      <span class="px-3"><a @click="emitCurrentPage(currentPage + 1)"
          :class="currentPage == pageCount ? 'disabled' : ''">
          <font-awesome-icon :icon="$i18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'"></font-awesome-icon>
        </a></span>
    </ul>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        currentPage: this.crntPage,
      }
    },
    props: {
      list: {
        type: Array,
        required: true
      },
      perPage: {
        type: Number,
        default: 5
      },
      crntPage: {
        type: Number,
        default: 1
      }
    },
    mounted() {
      this.emitCurrentPage(this.currentPage)
    },
    computed: {
      pageCount() {
        return Math.ceil(this.count / this.perPage)
      },
      count() {
        return this.list.length
      },
      chunkArray() {
        let array = this.list
        let size = this.perPage
        let result = []
        for (let i = 0; i < array.length; i += size) {
          let chunk = array.slice(i, i + size)
          result.push(chunk)
        }
        return result
      }
    },
    methods: {
      emitCurrentPage(i) {
        let currentPage = this.setCurrentPage(i)
        this.$emit('currentPage', this.chunkArray[currentPage - 1])
      },
      limitNumberWithinRange(num, min, max) {
        return Math.min(Math.max(parseInt(num), min), max)
      },
      setCurrentPage(i) {
        let currentPage = this.limitNumberWithinRange(i, 1, this.pageCount)
        this.currentPage = currentPage
        return currentPage
      },
    }
  }
  
</script>

<style scoped>
  .pagination a.disabled {
    @apply cursor-default text-josa-warm-grey;
  }

  .pagination a.disabled:hover {
    @apply text-josa-warm-grey;
  }loading

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