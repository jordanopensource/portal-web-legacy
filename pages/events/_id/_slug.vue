<template>
  <EventSingle :event="event" />
</template>

<script>
  import axios from 'axios';
  import EventSingle from '~/components/Events/EventSingle';
  export default {
    layout: "default",
    asyncData(context) {
      return axios.get(process.env.baseUrl + '/events/' + context.params.id)
        .then(res => {
          return {
            event: res.data
          }
        })
        .catch(e => context.error(e))
    },
    components: {
      EventSingle
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageTitle,
        meta: [{
            hid: 'event',
            name: 'Event'
          },
          ...this.$options.filters.ogTags('event', this.event, this.$route.path, this.$i18n.locale),
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageTitle() {
        return this.event.name
      }
    }
  };

</script>
