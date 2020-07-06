<!-- Fetch and list events based on event categories-->
<template>
  <section>
    <h3 v-if="title">{{ title }}</h3>
    <div v-for="month in months" :key="month" class="mb-20">
      <h3>{{ month }}</h3>
      <eventPreview v-for="event in sortedEvents[month]" :key="event.id" :id="event.id" :event="event" />
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
        loadedEvents: []
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
        let q = "startDate_gte=" + from;
        args.push(q)

        if (this.numberOfEvents) {
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
      }
    },
    computed: {
      sortedEvents() {
        var data = this.loadedEvents
        var obj = {};
        data.forEach((e, i) => (i = moment(e.startDate).format("MMMM YYYY"), obj[i] ? obj[i].push(e) : (obj[i] = [e])));
        return obj;
      },
      months() {
        const data = this.sortedEvents
        var months = {};
        months = Object.keys(data);
        return months;
      }
    }
  }

</script>
