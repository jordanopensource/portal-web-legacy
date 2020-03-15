<template>
  <div class="container my-8">
    <div class="row ">
      <impactBox class="w-full md:w-1/2 p-12"/>
      <instagramFeed class="w-full md:w-1/2"/>
    </div>
  </div>
</template>

<script>
import ImpactBox from '~/components/ImpactBox';
import InstagramFeed from '~/components/InstagramFeed';

export default {
  components: {
    'impactBox': ImpactBox,
    'instagramFeed': InstagramFeed,
  }
}
</script>

<style scoped>

</style>
