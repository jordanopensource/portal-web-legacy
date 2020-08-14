<template>
  <div id="homeBanner" class="bg-josa-warm-grey-light">
    <div class="container">
      <div class="flex flex-row justify-between align-middle flex-wrap md:flex-no-wrap py-20 px-12 bg-josa-warm-grey-light">
        <div class="sm:max-w-1/2 lg:max-w-1/3">
          <h2 class="font-aleoLightItalic mb-8 text-3xl lg:text-4xl">{{ pageMeta['description_' + $i18n.locale] | capitalize }}</h2>
          <nuxt-link to="contact-us" class="button button-blue-full mb-8">{{ $t('contact.connect') }}</nuxt-link>
        </div>
        <appImage :image="pageMeta.image" class="bot mx-auto sm:mx-0 md:ltr:pl-8 md:rtl:pr-8 h-full align-middle inline object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'HomeBanner',
    props: {
      pageMeta: {
        type: Object,
        required: true
      }
    },
    components: {
      appImage
    }
  }

</script>
<style scoped>
  .button {
    @apply normal-case;
  }

  h2 {
    @apply leading-normal;
  }

</style>
