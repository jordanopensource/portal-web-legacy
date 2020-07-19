<template>
  <div>
    <mainHeader />
    <div class="md:px-0 bg-white">
    <nuxt />
    </div>
    <mainFooter />
  </div>
</template>

<script>
  import mainHeader from '~/components/UI/Header';
  import mainFooter from '~/components/UI/Footer';

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
      mainHeader,
      mainFooter
    },
  }
</script>
<style>

</style>
