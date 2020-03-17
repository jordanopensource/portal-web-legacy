<template>
  <div class="container my-8">
    <div class="row">
      <impactBox class="w-full md:w-1/2 p-12"/>
      <instagramFeed class="w-full md:w-1/2"/>
    </div>

    <div class="row">
      <ourWork class="w-full md:w-1/2 p-12"/>
    </div>

    <div class="row">
      <joinUs class="w-full md:w-1/2"/>
      <ourCommunity class="w-full md:w-1/2 p-12"/>
    </div>

    <div class="row">
      <stayInTouch class="w-full md:w-1/2"/>
      <div class="w-full md:w-1/2">
      <ourNewsletter class="pb-0 p-12"/>
      <joinSlack class="p-12"/>
      </div>
    </div>
  </div>
</template>

<script>
import ImpactBox from '~/components/ImpactBox';
import InstagramFeed from '~/components/InstagramFeed';
import OurWork from '~/components/programs/OurWork';
import JoinUs from '~/components/join-us/JoinUs';
import OurCommunity from '~/components/our-community/OurCommunity';
import StayInTouch from '~/components/stay-in-touch/StayInTouch';
import OurNewsletter from '~/components/newsletter/OurNewsletter';
import JoinSlack from '~/components/join-us/JoinSlack';

export default {
  components: {
    'impactBox': ImpactBox,
    'instagramFeed': InstagramFeed,
    'ourWork': OurWork,
    'joinUs': JoinUs,
    'ourCommunity': OurCommunity,
    'stayInTouch': StayInTouch,
    'ourNewsletter': OurNewsletter,
    'joinSlack': JoinSlack,
  }
}
</script>

<style scoped>

</style>
