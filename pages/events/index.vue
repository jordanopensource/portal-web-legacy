<template>
  <div class="events-page container">
    <div class="container flex justify-between flex-wrap content-center mb-4">
    <h2 class="title m-0">Events</h2>
    <AppButton btn-style="button-blue-full" @click="$router.push('/events/create')">Create Event</AppButton>
    </div>
      <div>
        <EventList :events="loadedEvents" />
    </div>
  </div>
</template>

<script>
import EventList from "@/components/Events/EventList";
import AppButton from '@/components/form-components/AppButton';
export default {
  layout: "general",
  components: {
    EventList,
    AppButton
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
