<template>
  <div class="px-6 md:px-12">
    <div class="flex flex-wrap md:flex-no-wrap justify-between items-baseline">
      <h2 class="mb-8">{{ $t('events.upcoming') }}</h2>
      <nuxt-link :to="localePath('events')">
        <h6 class="display-more">{{ $t('eventCats.all') }}
          <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
        </h6>
      </nuxt-link>
    </div>
    <eventListUpcoming :showTitle="false"/>
  </div>
</template>

<script>
import eventListUpcoming from "~/components/Events/EventList";

export default {
  components: {
    eventListUpcoming
  },
  computed: {
    arrowIcon() {
      if (this.$i18n.locale == "ar") {
        return 'long-arrow-alt-left'
      } else {
        return 'long-arrow-alt-right'
      }
    }
  }
}
</script>
