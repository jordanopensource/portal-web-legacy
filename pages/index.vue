<template>
  <div class="container my-8">
    <div class="row">
      <impactBox id="impact" class="w-full md:w-1/2 p-12" />
      <instagramFeed class="w-full md:w-1/2" />
    </div>

    <div class="row">
      <ourWork id="ourwork" class="w-full md:w-1/2 p-12" />
      <latestJOSA class="w-full md:w-1/2 p-12" />
    </div>

    <div class="row">
      <joinUs id="action" class="w-full md:w-1/2" />
      <ourCommunity class="w-full md:w-1/2 p-12" />
    </div>

    <div class="row">
      <stayInTouch id="connect" class="w-full md:w-1/2" />
      <div class="w-full md:w-1/2 flex flex-col">
        <ourNewsletter class="pb-0 p-12" />
        <joinSlack class="p-12 flex-grow" />
      </div>
    </div>
  </div>
</template>

<script>
  import impactBox from '~/components/Impact/ImpactBox';
  import instagramFeed from '~/components/SocialMediaFeed/InstagramFeed';
  import ourWork from '~/components/Programs/OurWork';
  import joinUs from '~/components/JoinUs/JoinUs';
  import ourCommunity from '~/components/Community/OurCommunity';
  import stayInTouch from '~/components/StayInTouch/StayInTouch';
  import ourNewsletter from '~/components/Newsletter/OurNewsletter';
  import joinSlack from '~/components/JoinUs/JoinSlack';
  import latestJOSA from '~/components/SocialMediaFeed/LatestJOSA';

  export default {
    components: {
      impactBox,
      instagramFeed,
      ourWork,
      joinUs,
      ourCommunity,
      stayInTouch,
      ourNewsletter,
      joinSlack,
      latestJOSA,
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: 'Jordan Open Source Association',
        meta: [{
            hid: 'home-page',
            name: 'Home Page',
            content: 'Jordan Open Source Association'
          },
          ...i18nSeo.meta
        ]
      }
    },
  }

</script>

<style scoped>

</style>
