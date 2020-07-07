<template>
  <div id="contact-us">
    <pageBanner :pageMeta="contactUsMeta" />
    <locationMap :latitude="josaOfficeMap.latitude" :longitude="josaOfficeMap.longitude" :mapHeight="josaOfficeMap.mapHeight" :mLongitude="josaOfficeMap.mLongitude" :mLatitude="josaOfficeMap.mLatitude" />
    <addressCard :info="contactInfo" />
    <feedback />
  </div>
</template>

<script>
  import axios from 'axios';
  import pageBanner from "~/components/UI/PageBanner";
  import addressCard from '~/components/Contact/AddressCard';
  import feedback from '~/components/Contact/Feedback';
  import locationMap from '~/components/Map/LocationMap';

  export default {
    data() {
      return {
        title: "Contact Us",
        josaOfficeMap: {
          longitude: 35.83403721614927,
          latitude: 31.9722036,
          mLatitude: 31.970757285413548,
          mLongitude: 35.834006667137146,
          mapHeight: '500px'
        }
      }
    },
    head() {
      return {
        title: this.title,
        meta: [{
          hid: 'contact-us',
          name: 'contact us'
        }]
      }
    },
    layout: "general",
    components: {
      pageBanner,
      addressCard,
      feedback,
      locationMap
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?title=contact-us');
      const contactData = await axios.get(process.env.baseUrl + '/contact-info');
      return {
        contactUsMeta: pageMeta.data[0],
        contactInfo: contactData.data
      }
    },
  }

</script>

<style>

</style>
