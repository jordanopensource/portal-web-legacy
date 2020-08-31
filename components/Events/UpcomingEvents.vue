<!-- Fetch and list upcoming events-->
<template>
  <section class="text-center mx-auto">
    <appImage :image="eventsImage" size="medium" class="bot" />
    <h2 class="pb-2" v-if="title">{{ title }}</h2>
    <template v-if="ifNotEmpty()">
    <div v-for="(event,index) in loadedEvents" :key="event.id">
      <eventPreviewAlt :id="event.id" :event="event" />
      <div class="py-4 px-8" :class="index == numberOfEvents - 1 ? 'hidden' : 'block'">
        <hr class="border-josa-warm-grey">
      </div>
    </div>
    </template>
    <p v-else>{{ $t('events.noUpcoming')}}</p>
    <nuxt-link to="/events" class="button button-blue-full mt-8">{{ $t('events.more') }}</nuxt-link>
  </section>
</template>

<script>
  import eventPreviewAlt from '~/components/Events/EventPreviewAlt';
  import axios from 'axios';
  import moment from 'moment';
  import appImage from '~/components/UI/appImage';

  export default {
    data() {
      return {
        sortBy: 'startDate:DESC',
        loadedEvents: [],
        eventsImage: {}
      }
    },
    components: {
      eventPreviewAlt,
      appImage
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
      this.fetchEvents();
      this.fetchEventsImage();
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
      },
      async fetchEventsImage() {
        await axios
          .get(process.env.baseUrl + '/page-metas?pageId=event')
          .then(res => {
            this.eventsImage = res.data[0].image
          })
          .catch(e => this.context.error(e));
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedEvents) && this.loadedEvents.length)
          return true;
        else
          return false;
      }
    }
  }

</script>
<style scoped>
  .bot {
    @apply mx-auto mb-8 h-auto;
    width: 300px;
  }

  .button {
    @apply normal-case
  }

</style>
