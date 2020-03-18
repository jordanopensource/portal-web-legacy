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
    components: {
      'app-header': Header,
      'banner': Banner,
      'appFooter': Footer,
    },
  }
</script>
<style>

</style>
