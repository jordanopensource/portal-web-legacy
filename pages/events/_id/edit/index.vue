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
  computed: {
    event() {
      const id = this.$route.params.id
      const events = this.$store.getters.loadedEvents
      const event = events.find( obj => obj.id == id )
      return event
    }
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
