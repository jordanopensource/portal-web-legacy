<template>
  <div class="new-event-page">
    <section class="new-event-form">
      <EventForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import EventForm from "@/components/Events/EventForm";

export default {
  layout: "general",
  components: {
    EventForm
  },
  methods: {
    onSubmitted(eventData) {
      this.$store.dispatch("addEvent", eventData).then(() => {
        this.$router.push("/events");
      });
    }
  }
};
</script>

<style scoped>
.new-event-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-event-form {
    width: 500px;
  }
}
</style>
