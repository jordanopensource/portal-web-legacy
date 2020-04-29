<template>
  <div class="events-page container">
    <div class="container flex justify-between flex-wrap content-center mb-4">
    <h2 class="title m-0">Events</h2>
    </div>
      <div>
        <EventList :events="loadedEvents" />
    </div>
  </div>
</template>

<script>
import EventList from "@/components/Events/EventList";
export default {
  layout: "general",
  components: {
    EventList,
  },
  computed: {
    loadedEvents() {
      return this.$store.getters.loadedEvents
    }
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
};
</script>


<style scoped>
</style>
