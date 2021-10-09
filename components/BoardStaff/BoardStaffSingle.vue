<template>
  <div class="flex flex-no-wrap mt-12">
    <appImage class="picture-background pb" v-if="personnel.picture" :image="personnel.picture" />
    <div v-else class="picture-background pb"></div>
    <div class="pl-4 pt-4 md:pt-8 relative">
      <h4 class="font-medium">{{ personnel['fullName_' + $i18n.locale] }}</h4>
      <p class="uppercase text-sm">{{ personnel['position_' + $i18n.locale] }}</p>
      <socialAccounts class="mt-0 md:mt-6 bottom-0 relative sm:absolute" v-if="personnel.socialAccounts"
        :accounts="personnel.socialAccounts" />
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
    width: 189px;
    height: 156px;
  }

  .pb {
    width: 125px;
    height: 103px;
    min-width: 125px;
    min-height: 103px;
  }

  @screen sm {
    .pb {
      width: 189px;
      height: 156px;
      min-width: 189px;
      min-height: 156px;
    }
  }

</style>
