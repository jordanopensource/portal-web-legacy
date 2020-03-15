<template>
  <div>
    <app-header />
    <banner />
    <nuxt class="bg-josa-warm-grey-light" />
  </div>
</template>

<script>
  import Header from '~/components/Header';
  import Banner from '~/components/Banner';

  export default {
    components: {
      'app-header': Header,
      'banner': Banner,
    },
  }
</script>
<style>

</style>
