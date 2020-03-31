<template>
  <div>
    <app-header />
    <banner />
    <nuxt class="bg-josa-warm-grey-light" />
    <appFooter />
  </div>
</template>

<script>
  import Header from '~/components/Header';
  import Banner from '~/components/Banner';
  import Footer from '~/components/Footer';

  export default {
    head () {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        meta: [
          {
            hid: 'home-page',
            name: 'Home Page',
            content: 'JOSA Portal Web App'
          },
          ...i18nSeo.meta
        ]
      }
    },
    components: {
      'app-header': Header,
      'banner': Banner,
      'appFooter': Footer,
    },
  }
</script>
<style>

</style>
