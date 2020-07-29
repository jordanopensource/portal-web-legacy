<template>
  <div :dir="$dir()">
    <mainHeader />
    <nuxt />
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
            hid: 'profile',
            name: 'Profile',
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
