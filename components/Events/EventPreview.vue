<template>
  <div class="preview my-8 flex flex-wrap md:flex-no-wrap">

    <appImage v-if="event.thumbnail" class="thumbnail" :image="event.thumbnail" size="medium" />
    <img v-else class="thumbnail" :src="placeholderImage" />

    <div ref="content" class="flex-grow">
      <p class="text-josa-blue text-lg pb-2">{{ event.startDate | dayDate }}</p>

      <nuxt-link :to="eventLink">
        <h2 class="mb-4 font-aleoLightItalic text-3xl">{{ event['title_' + $i18n.locale] }}</h2>
      </nuxt-link>

      <div class="event-info flex flex-wrap md:flex-no-wrap">
        <span class="mr-4">
          <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
          {{ event.startDate | time }} - {{ event.endDate | time }}
        </span>

        <span>
          <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
          {{ event.address['addressOne_' + $i18n.locale] }}
        </span>
      </div>

      <nuxt-link :to="eventLink" class="block py-4 text-josa-blue font-bold text-sm hover:opacity-75">
        {{ $t('meta.knowMore') }}
        <font-awesome-icon class="ml-2 align-middle" :icon="['fas', 'long-arrow-alt-right']" />
      </nuxt-link>

    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'EventPreview',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage
    },
    props: {
      event: {
        type: Object,
        required: true
      }
    },
    computed: {
      eventLink() {
        return this.localePath('/events/' + this.event.id)
      }
    }
  }

</script>

<style scoped>
  .preview .thumbnail {
    @apply w-full object-cover mb-4;
  }

  p {
    @apply leading-golden;
  }

  .icon {
    @apply text-josa-warm-grey-dark;
  }

  @screen md {
    .preview .thumbnail {
      @apply pr-6 mb-0;
      min-width: 250px;
      flex-shrink: 0;
      width: 40%;
      max-height: 200px;
    }
  }

</style>
