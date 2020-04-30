<template>
  <div>
    <app-header />
    <div class="p-12 md:px-0">
    <nuxt class="bg-josa-warm-grey-light" />
    </div>
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
            hid: 'JOSAPortal',
            name: 'JOSA Portal Web App',
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
