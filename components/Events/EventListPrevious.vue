<!-- Fetch and list events based on event categories-->
<template>
  <section>
    <div v-if="ifNotEmpty()">
      <div v-for="month in months" :key="month" class="mb-20">
        <h3>{{ month }}</h3>
        <eventPreview v-for="event in displayedEvents[month]" :key="event.id" :id="event.id" :event="event" />
      </div>
      <div class="pagination pt-6 text-center border-t border-dotted">
        <ul>
          <span class="px-3"><a @click="calculateCurrentPage(currentPage - 1)"
              :class="currentPage == 1 ? 'disabled' : ''">
              <font-awesome-icon icon="chevron-left"></font-awesome-icon>
            </a></span>
          <span v-for="i in calculatePages()" :key="i">
            <li
              v-if="(i == calculatePages() || Math.abs(i - currentPage) < 3) || (i==1 || Math.abs(i - calculatePages()) < 1)">
              <a class="px-1" href="#" @click="currentPage = i"
                :class="{current: currentPage === i, last: (i == calculatePages()  && Math.abs(i - currentPage) > 3), first:(i == 1 && Math.abs(i - currentPage) > 3)}">
                {{i}}</a>
            </li>
          </span>
          <span class="px-3"><a @click="calculateCurrentPage(currentPage + 1)"
              :class="currentPage == calculatePages() ? 'disabled' : ''">
              <font-awesome-icon icon="chevron-right"></font-awesome-icon>
            </a></span>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>{{ $t('events.noPrevious')}}</p>
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
        sortBy: 'startDate:DESC',
        loadedEvents: [],
        numberPerPage: 6,
        currentPage: 1,
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
      numberOfEvents: {
        type: Number,
        default: 0
      }
    },
    created() {
      this.fetchEvents()
    },
    methods: {
      query() {
        var args = []
        var query = ""

        let from = moment().subtract(24, 'hours');
        from = from.format(moment.HTML5_FMT.DATETIME_LOCAL_MS);
        let q = "startDate_lt=" + from;
        args.push(q)

        if (this.numberOfEvents > 0) {
          let q = "_limit=" + this.numberOfEvents;
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
      ifNotEmpty() {
        if (Array.isArray(this.loadedEvents) && this.loadedEvents.length)
          return true;
        else
          return false;
      },
      calculatePages() {
        return Math.ceil(Object.keys(this.sortedEvents).length / this.numberPerPage)
      },
      calculateCurrentPage(num) {
        this.currentPage = this.limitNumberWithinRange(num, 1, this.calculatePages())
        return this.currentPage
      },
      limitNumberWithinRange(num, min, max) {
        return Math.min(Math.max(parseInt(num), min), max)
      },
      chunkObject(object, chunkSize) {
        var values = Object.values(object);
        var final = [];
        var counter = 0;
        var portion = {};

        for (var key in object) {
          if (counter !== 0 && counter % chunkSize === 0) {
            final.push(portion);
            portion = {};
          }
          portion[key] = values[counter];
          counter++
        }
        final.push(portion);
        return final;
      },
    },
    computed: {
      sortedEvents() {
        var data = this.loadedEvents
        var sorted = {};
        data.forEach((e, i) => (i = moment(e.startDate).locale(this.$i18n.locale).format("MMMM YYYY"), sorted[i] ?
          sorted[i]
          .push(e) : (sorted[i] = [e])));
        return sorted
      },
      displayedEvents() {
        const tempArray = this.chunkObject(this.sortedEvents, this.numberPerPage)
        return tempArray[this.currentPage - 1]
      },
      months() {
        const data = this.displayedEvents
        var months = {};
        months = Object.keys(data);
        return months;
      }
    }
  }
</script>

<style scoped>
  a.disabled {
    @apply cursor-default text-josa-warm-grey;
  }

  a.disabled:hover {
    @apply text-josa-warm-grey
  }

  a {
    color: #999;
  }

  .current {
    @apply bg-josa-blue-dark;
    border-radius: 20%;

    padding-left: 4px;
    padding-right: 4px;
    padding-top: 0.2px;
    padding-bottom: 0.5px;
    color: white;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  li {
    display: inline;
    margin: 5px 5px;
  }

  a.first::after {
    content: '  ...'
  }

  a.last::before {
    content: '... '
  }
</style>