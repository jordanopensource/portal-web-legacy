<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
  import Header from '~/components/Header';

  export default {
    components: {
      'app-header': Header,
    },
  }
</script>
<style>

</style>
