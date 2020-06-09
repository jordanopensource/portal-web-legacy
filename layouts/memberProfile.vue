<template>
  <div>
    <app-header />
    <nuxt />
    <appFooter />
  </div>
</template>

<script>
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';

  export default {
    head () {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        meta: [
          {
            hid: 'profile',
            name: 'Profile',
            content: 'JOSA Portal Web App'
          },
          ...i18nSeo.meta
        ]
      }
    },
    components: {
      'app-header': Header,
      'appFooter': Footer,
    },
  }
</script>
<style>

</style>
