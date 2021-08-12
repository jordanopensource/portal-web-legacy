<!-- Fetch and list events based on event categories-->
<template>
  <section>
    <div v-if="ifNotEmpty()">
      <div v-if="showTitle" class="flex justify-between items-baseline">
        <h2 class="mb-8">{{ $t('events.upcoming') }}</h2>
          <nuxt-link :to="localePath('events')">
            <h6 class="display-more">{{ $t('eventCats.all') }}
              <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
            </h6>
          </nuxt-link>
      </div>
      <div v-for="month in months" :key="month" class="mb-20">
        <h3 v-if="showMonths">{{ month }}</h3>
        <eventPreview v-for="event in sortedEvents[month]" :key="event.id" :id="event.id" :event="event" />
        <div v-if="pageCount > 1" class="pagination pt-6 text-center border-t border-dotted">
          <span class="py-2" v-if="currentPage > 1"><a
              @click="fetchCurrentPage(currentPage - 1)">{{ $t('pagination.prev') }}</a></span>
          <span class="py-2 inline-flex ltr:text-left rtl:text-right"><a @click="fetchCurrentPage(i)"
              v-for="i in pageCount" :key="i" class="p-2"
              :class="i == currentPage ? 'active' : ''">{{ $t(i) }}</a></span>
          <span class="py-2" v-if="currentPage < pageCount"><a
              @click="fetchCurrentPage(currentPage + 1)">{{ $t('pagination.next') }}</a></span>
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{ $t('events.noUpcoming')}}</p>
    </div>
  </section>
</template>

<script>
  import eventPreview from '@/components/Events/EventPreview';
  import axios from 'axios';
  import moment from 'moment';

  export default {
    data() {
      return {
        sortBy: 'startDate:ASC',
        loadedEvents: [],
        currentPage: 1,
        start: 0,
        count: 0
      }
    },
    components: {
      eventPreview
    },
    props: {
      title: {
        type: String
      },
      category: {
        type: String,
        required: true
      },
      limit: {
        type: Number,
        default: 10
      },
      showMonths: {
        type: Boolean,
        default: true
      },
      showTitle: {
        type: Boolean,
        default: true
      }
    },
    created() {
      this.fetchEvents()
      this.countEvents()
    },
    methods: {
      fetchCurrentPage(i) {
        this.currentPage = i
        this.start = this.limit * (this.currentPage - 1)
        this.fetchEvents()
      },
      query() {
        var args = []
        var query = ""

        let from = moment().subtract(24, 'hours');
        from = from.format(moment.HTML5_FMT.DATETIME_LOCAL_MS);
        let q = "startDate_gte=" + from;
        args.push(q)
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
        query = args.join("&")
        return query
      },
      async fetchEvents() {
        const query = this.query()
        await axios
          .get(process.env.baseUrl + "/events?" + query)
          .then(res => {
            const eventsArray = []
            for (const key in res.data) {
              eventsArray.push({
                ...res.data[key]
              })
            }
            this.loadedEvents = eventsArray
          })
          .catch(e => this.context.error(e));
      },
      async countEvents() {
        var args = []
        var query = ""
        let from = moment().subtract(24, 'hours');
        from = from.format(moment.HTML5_FMT.DATETIME_LOCAL_MS);
        let q = "startDate_gte=" + from;
        args.push(q)
        if (this.category && this.category != "all") {
          let q = "category.name=" + this.category;
          args.push(q)
        }
        query = args.join("&")
        await axios
          .get(process.env.baseUrl + "/events?" + query)
          .then(res => {
            this.count = res.data.length
          })
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedEvents) && this.loadedEvents.length)
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
    computed: {
      sortedEvents() {
        var data = this.loadedEvents
        var obj = {};
        data.forEach((e, i) => (i = this.$options.filters.monthYearDate(e.startDate, this.$i18n.locale), obj[i] ? obj[i]
          .push(e) : (obj[i] = [e])));
        return obj;
      },
      months() {
        const data = this.sortedEvents
        var months = {};
        months = Object.keys(data);
        return months;
      },
      pageCount() {
        return Math.ceil(this.count / this.limit)
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
  .pagination a.active {
    @apply text-josa-blue-veryDark;
  }
</style>