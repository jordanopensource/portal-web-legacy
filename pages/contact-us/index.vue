<template>
  <div id="contact-us">
    <pageBanner :pageMeta="pageInfo" />
    <locationMap :latitude="contactInfo.address.latitude" :longitude="contactInfo.address.longitude"
      :mLongitude="contactInfo.address.markerLongitude" :mLatitude="contactInfo.address.markerLatitude"
      mapHeight="500px" />
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
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageInfo['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.pageInfo['metaDescription_' + this.$i18n.locale] ? this.pageInfo['metaDescription_' + this.$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      pageBanner,
      addressCard,
      feedback,
      locationMap
    },
    computed: {
      pageInfo() {
        return this.$store.state.pages.contact
      }
    },
    async asyncData(context) {
      const contactData = await axios.get(process.env.baseUrl + '/contact-info');
      return {
        contactInfo: contactData.data
      }
    },
  }
</script>

<style>

</style>