<template>
  <div id="contact-us">
    <pageBanner :pageMeta="contactUsMeta" />
    <locationMap :latitude="contactInfo.address.latitude" :longitude="contactInfo.address.longitude" :mLongitude="contactInfo.address.markerLongitude" :mLatitude="contactInfo.address.markerLatitude" mapHeight="500px"/>
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
        title: "Contact Us"
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
    layout: "default",
    components: {
      pageBanner,
      addressCard,
      feedback,
      locationMap
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=contact-us');
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
