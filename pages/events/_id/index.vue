<template>
  <EventSingle :article="event"/>
</template>

<script>
  import axios from 'axios';
  import EventSingle from '~/components/Events/EventSingle';
  export default {
    layout: "general",
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
    }
  };

</script>
