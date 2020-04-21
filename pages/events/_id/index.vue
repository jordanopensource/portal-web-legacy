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
  computed: {
    event() {
      const id = this.$route.params.id
      const events = this.$store.getters.loadedEvents
      const event = events.find( obj => obj.id == id )
      return event
    }
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
