<template>
  <section>
    <div class="container">
      <div class="p-6 md:p-12">
        <h4 class="text-josa-blue mb-2">{{ event.startDate | dayDate($i18n.locale) }}</h4>
        <h2>{{ event['title_' + $i18n.locale] }}</h2>
        <div class="content flex flex-wrap md:flex-no-wrap mt-12">
          <div class="w-full md:w-3/5 md:ltr:mr-8 md:rtl:ml-8 mb-8">
            <appImage v-if="event.thumbnail" :image="event.thumbnail" size="large" class="thumbnail" />
            <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
            <shareButtons v-if="url" :url="url" class="mt-8 w-full justify-end" />
            <div v-if="event['description_' + $i18n.locale]" class="description py-4 mb-4"
              v-html="event['description_' + $i18n.locale]"></div>
            <speakers v-if="event.speakers.length > 0" :speakers="event.speakers" />
          </div>
          <div class="w-full md:w-2/5 mb-8">
            <modal v-if="showModal && event.onlineEvent" @close="showModal=false">
              <slot>
                <joinForm :event="event" :running="running" v-if="event.startDate" :from="event.startDate"
                  :to="event.endDate" />
              </slot>
            </modal>
            <registerationForm v-if="event.showRegisterationForm" class="mb-8" :eventId="event.id"
              :registrants="event.registrants" />
            <div v-if="event.onlineEvent && running == true" class="mb-8">
              <joinFormCard :event="event" />
            </div>
            <timeCard v-if="event.startDate" class="mb-8" :from="event.startDate" :to="event.endDate" :event="event" />
            <locationCard v-if="event.address" :address="event.address" />
            <onlineEventCard v-if="event.onlineEvent" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  import appImage from '~/components/UI/appImage';
  import timeCard from '~/components/Events/TimeCard.vue';
  import speakers from '~/components/Events/Speakers.vue';
  import locationCard from '~/components/Events/LocationCard.vue';
  import registerationForm from '~/components/Events/RegisterationForm';
  import joinForm from '~/components/Events/JoinForm';
  import modal from '~/components/UI/Modal';
  import onlineEventCard from '~/components/Events/OnlineEventCard';
  import shareButtons from '~/components/ShareButtons/ShareButtons';
  import joinFormCard from '~/components/Events/JoinFormCard';

  export default {
    name: 'EventSingle',
    data() {
      return {
        placeholderImage: process.env.bucketUrl + '/josabots_88f0a93786.jpeg',
        url: null,
        running: 'true',
      }
    },
    methods: {
      createHash(data) {
        const crypto = require('crypto');
        const hash = crypto.createHash('sha1');
        hash.update(data);
        return hash.digest('hex');
      },
    },
    async fetch() {
      let url = this.$config.bbbAPIUrl
      let secret = this.$config.bbbAPISecret
      let meetingID = this.event.onlineMeeting.meetingID
      let data = `isMeetingRunningmeetingID=${meetingID}${secret}`
      let encoded = encodeURI(data)
      let checksum = this.createHash(encoded)
      let redirect = `${url}isMeetingRunning?meetingID=${meetingID}&checksum=${checksum}`
      const response = await axios.get(redirect);
      const parser = new DOMParser();
      const xmlDOM = parser.parseFromString(response.data, "text/xml");
      const value = xmlDOM.getElementsByTagName("running")[0];
      if (value.childNodes[0].nodeValue == "false") {
        this.running = false
      } else {
        this.running = true
      }
    },
    fetchOnServer: false,
    components: {
      appImage,
      timeCard,
      speakers,
      locationCard,
      registerationForm,
      joinForm,
      modal,
      onlineEventCard,
      shareButtons,
      joinFormCard,
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
      this.url = window.location.href;
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
