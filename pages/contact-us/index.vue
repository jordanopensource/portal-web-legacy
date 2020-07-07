<template>
  <div id="contact-us">
    <pageBanner :pageMeta="contactUsMeta" />
    <addressCard :info="contactInfo" />
    <feedback />
  </div>
</template>

<script>
  import axios from 'axios';
  import pageBanner from "~/components/UI/PageBanner";
  import addressCard from '~/components/Contact/AddressCard';
  import feedback from '~/components/Contact/Feedback';

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
    layout: "general",
    components: {
      pageBanner,
      addressCard,
      feedback
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
