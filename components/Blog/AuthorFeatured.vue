<template>
  <div class="md:flex flex-no-wrap items-center mt-4 ">  
    <appImage v-if="picture" :image="picture" size="small" class="profilePicture" />
    <img v-else size="small" class="profilePicture" src="/images/icons/authorimage_default.png" />
    <div class="md:flex items-center opacity-90">
      <p v-if="writtenBy" class="ltr:text-sm ltr:mr-1 rtl:ml-1 uppercase">{{ $t('meta.writtenBy')}}</p>
      <p v-else-if="translatedBy" class="ltr:mr-1 rtl:ml-1 ltr:text-sm uppercase">{{ $t('meta.translatedBy')}}</p>
      <h4>{{ name }}</h4>
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
      writtenBy: {
        default: true
      },
      translatedBy: {
        default: false
      }
    },
    components: {
      appImage
    }
  }

</script>
<style scoped>
.profilePicture{
    @apply w-10 ;
}
</style>