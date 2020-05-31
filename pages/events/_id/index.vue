<template>
  <div class="container">
    <appImage v-if="event.thumbnail" :image="event.thumbnail" size="medium" />
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
