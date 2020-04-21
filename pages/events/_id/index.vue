<template>
  <div class="container">
      <h2 class="event-name inline-block pr-2">{{ event.name }}</h2>
      <span>
        <nuxt-link to="edit" append>
          <font-awesome-icon class="mr-2" :icon="['fas', 'edit']"/>
        </nuxt-link>
        <span @click="deleteEvent">
          <font-awesome-icon class="mr-2" :icon="['fas', 'trash-alt']"/>
        </span>
      </span>
      <div class="event-details">
        <div>Event Date: {{ event.date }}</div>
        <div>Location: {{ event.location }}</div>
        <div>Description:</div>
        <div>{{ event.description }}</div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  layout: "general",
    asyncData(context) {
    return axios.get(process.env.baseUrl + '/event/' + context.params.id)
      .then(res => {
        console.log(res.data)
        return {
          event: res.data
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    deleteEvent() {
      const eventId = this.$route.params.id
      this.$store.dispatch("deleteEvent", eventId).then(() => {
        this.$router.push("/events");
      });
    }
  }
};
</script>


<style scoped>

</style>
