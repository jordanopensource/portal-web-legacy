<template>
  <div id="contact-us">
    <pageBanner :pageMeta="pageInfo" />
    <template v-if="$fetchState.timestamp && contactInfo">
    <locationMap :latitude="contactInfo.address.latitude" :longitude="contactInfo.address.longitude"
      :mLongitude="contactInfo.address.markerLongitude" :mLatitude="contactInfo.address.markerLatitude"
      mapHeight="500px" />
    <addressCard :info="contactInfo" />
    </template>
    <feedback />
  </div>
</template>

<script>
  import pageBanner from "~/components/UI/PageBanner";
  import addressCard from '~/components/Contact/AddressCard';
  import feedback from '~/components/Contact/Feedback';
  import locationMap from '~/components/Map/LocationMap';

  export default {
    layout: "default",
    data() {
      return {
        contactInfo: null
      }
    },
    components: {
      pageBanner,
      addressCard,
      feedback,
      locationMap
    },
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
    computed: {
      pageInfo() {
        return this.$store.state.pages.contact
      }
    },
    async fetch() {
      let info = this.$store.state.contact.info
      if (!info) {
        await this.$store.dispatch("contact/fetch")
      }
      this.contactInfo = this.$store.state.contact.info
    }
  }
</script>

<style>

</style>