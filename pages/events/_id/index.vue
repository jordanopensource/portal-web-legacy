<template>
  <div class="container">
    <appImage :image="event.thumbnail" size="medium" />
      <h2 class="event-name inline-block pr-2">{{ event.name }}</h2>
      <div class="event-details">
        <div>Event Date: {{ event.date | dateTime }}</div>
        <div>Location: {{ event.location }}</div>
        <div>Description:</div>
        <div>{{ event.description }}</div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import appImage from '~/components/UI/appImage';
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
    appImage
  },
};
</script>


<style scoped>

</style>
