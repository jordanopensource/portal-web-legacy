<template>
  <div>
    <mainHeader />
    <banner />
    <nuxt class="bg-josa-warm-grey-light" />
    <mainFooter />
  </div>
</template>

<script>
  import mainHeader from '~/components/UI/Header';
  import banner from '~/components/UI/Banner';
  import mainFooter from '~/components/UI/Footer';

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
      mainHeader,
      banner,
      mainFooter,
    },
  }
</script>
<style>

</style>
