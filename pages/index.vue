<template>
  <div class="container my-8">
    <div class="row">
      <impactBox id="impact" class="w-full md:w-1/2 p-12"/>
      <instagramFeed class="w-full md:w-1/2"/>
    </div>

    <div class="row">
      <ourWork id="ourwork" class="w-full md:w-1/2 p-12"/>
      <latestJOSA class="w-full md:w-1/2 p-12"/>
    </div>

    <div class="row">
      <joinUs id="action" class="w-full md:w-1/2"/>
      <ourCommunity class="w-full md:w-1/2 p-12"/>
    </div>

    <div class="row">
      <stayInTouch id="connect" class="w-full md:w-1/2"/>
      <div class="w-full md:w-1/2 flex flex-col">
      <ourNewsletter class="pb-0 p-12"/>
      <joinSlack class="p-12 flex-grow"/>
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
import LatestJOSA from '~/components/social-media-feed/LatestJOSA';

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
    'latestJOSA': LatestJOSA,
  }
}
</script>

<style scoped>

</style>
