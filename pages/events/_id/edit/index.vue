<template>
  <div class="event-page">
    <section class="update-form">
      <EventForm :event="event" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import EventForm from "@/components/Events/EventForm";
import axios from "axios";

export default {
  layout: "general",
  components: {
    EventForm
  },
  asyncData(context) {
    return axios.get(process.env.baseUrl + '/events/' + context.params.id)
      .then(res => {
        return {
          event: res.data
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedEvent) {
      this.$store.dispatch("editEvent", editedEvent).then(() => {
        this.$router.push("/events");
      });
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
