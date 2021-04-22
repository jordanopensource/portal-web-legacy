<template>
  <div class="flex flex-no-wrap items-center">
    <appImage v-if="picture" :image="picture" size="small" class="profilePicture" />
    <div class="opacity-90">
      <p v-if="hide==false" :class="bio ? 'hidden' : 'block'" class="ltr:text-xs rtl:text-sm uppercase">{{ $t('meta.writtenBy')}}</p>
      <h3 class="font-bold">{{ name }}</h3>
      <p v-if="bio">{{ bio }}</p>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'Author',
    components: {
      appImage
    },
    props: {
      name: {
        type: String,
      },
      picture: {
        type: Object
      },
      bio: {
        type: String
      },
      hide: {
        type: Boolean
      }
    },
    components: {
      appImage
    }
  }

</script>
