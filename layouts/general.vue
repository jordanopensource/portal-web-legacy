<template>
  <div :dir="$dir()">
    <mainHeader />
    <nuxt class="md:px-0 bg-white pb-8" />
    <mainFooter />
  </div>
</template>

<script>
  import mainHeader from '~/components/UI/Header';
  import mainFooter from '~/components/UI/Footer';

  export default {
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: 'Jordan Open Source Association',
        meta: [{
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
      mainFooter
    },
  }

</script>
<style>

</style>
