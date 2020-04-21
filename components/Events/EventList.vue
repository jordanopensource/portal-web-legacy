<template>
  <section class="grid gap-4 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <EventPreview
      v-for="event in events"
      :key="event.id"
      :id="event.id"
      :name="event.name"
      :date="event.date"
      :location="event.location"
      :description="event.description" />
  </section>
</template>

<script>
import EventPreview from '@/components/Events/EventPreview'

export default {
  components: {
    EventPreview
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

