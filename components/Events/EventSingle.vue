<template>
  <section>
    <div class="container">
      <div class="p-12">
        <div class="text-josa-blue text-xl mb-2">{{ event.startDate | dayDate($i18n.locale) }} </div>
        <h2>{{ event['title_' + $i18n.locale] }}</h2>
        <div class="content flex flex-wrap md:flex-no-wrap mt-12">
          <div class="w-full md:w-3/5 ltr:mr-8 rtl:ml-8 mb-8">
            <appImage v-if="event.thumbnail" :image="event.thumbnail" size="large" class="thumbnail" />
            <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
            <div v-if="event['description_' + $i18n.locale]" class="description py-8"
              v-html="event['description_' + $i18n.locale]"></div>
            <speakers v-if="event.speakers.length > 0" :speakers="event.speakers" />
            <shareButtons class="mt-8"/>  
          </div>
          <div class="w-full md:w-2/5 mb-8">
            <modal v-if="showModal && event.onlineEvent" @close="showModal=false">
              <slot>
                <joinForm :event="event" />
              </slot>
            </modal>
            <registerationForm v-if="event.showRegisterationForm" class="mb-8" :eventId="event.id"
              :registrants="event.registrants" />
            <timeCard v-if="event.startDate" class="mb-8" :from="event.startDate" :to="event.endDate" />
            <locationCard v-if="event.address" :address="event.address" />
            <onlineEventCard v-if="event.onlineEvent" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import timeCard from '~/components/Events/TimeCard.vue';
  import speakers from '~/components/Events/Speakers.vue';
  import locationCard from '~/components/Events/LocationCard.vue';
  import registerationForm from '~/components/Events/RegisterationForm';
  import joinForm from '~/components/Events/JoinForm';
  import modal from '~/components/UI/Modal';
  import onlineEventCard from '~/components/Events/OnlineEventCard';
  import shareButtons from '~/components/ShareButtons/ShareButtons'

  export default {
    name: 'EventSingle',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage,
      timeCard,
      speakers,
      locationCard,
      registerationForm,
      joinForm,
      modal,
      onlineEventCard,
      shareButtons
    },
    props: {
      event: {
        type: Object,
        required: true
      }
    },
    computed: {
      showModal() {
        return this.$store.getters.getShowModal
      }
    },
    mounted() {
      if ('join' in this.$route.query) {
        this.$store.dispatch('setShowModal', true)
      } else {
        this.$store.dispatch('setShowModal', false)
      }
    }
  }
</script>

<style scoped>
  section {
    @apply bg-white;
  }

  .thumbnail {
    @apply w-full;
  }

  .description>>>p,
  .description>>>h3 {
    @apply mb-4;
  }

</style>