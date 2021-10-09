<template>
  <div :dir="$dir()">
    <mainHeader />
    <FlashMessage :position="'right top'" />
    <nuxt class="content-wrapper md:px-0 bg-white" />
    <back-to-top />
    <mainFooter />
  </div>
</template>

<script>
  import mainHeader from '~/components/UI/Header';
  import mainFooter from '~/components/UI/Footer';
  import BackToTop from '../components/UI/BackToTop.vue';

  export default {
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association',
      }
    },
    components: {
      mainHeader,
      mainFooter,
      BackToTop
    },
  }

</script>
