<template>
  <div class="flex flex-no-wrap mt-12">
      <appImage class="picture-background" v-if="personnel.picture" :image="personnel.picture" />
      <div v-else class="picture-background pb"></div>
    <div class="px-4 pt-8 relative">
      <p class="font-bold">{{ personnel.fullName }}</p>
      <p class="uppercase text-sm">{{ personnel.position }}</p>
      <socialAccounts class="bottom-0 relative sm:absolute" v-if="personnel.socialAccounts" :accounts="personnel.socialAccounts" />
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import socialAccounts from '~/components/BoardStaff/SocialAccounts';
  export default {
    props: {
      personnel: {
        type: Object,
        required: true
      }
    },
    components: {
      appImage,
      socialAccounts
    }
  }

</script>

<style scoped>
  .picture-background {
    display: block;
    background-image: url('/images/icons/drop.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
  }
  .pb {
    width: 189px;
    height: 156px;
    min-width: 189px;
    min-height: 156px;
  }
</style>
