<template>
  <div id="banner" class="bg-josa-warm-grey-light">
    <div class="container">
      <div
        class="flex flex-row justify-between align-middle flex-wrap sm:flex-no-wrap py-20 px-12 bg-josa-warm-grey-light">
        <div class="my-auto sm:max-w-1/2 lg:max-w-1/3">
          <h4 class="font-aleoLightItalic mb-16">{{ pageMeta['title_' + $i18n.locale] }}</h4>
          <p v-if="pageMeta['description_' + $i18n.locale]" class="ltr:leading-none rtl:leading-tight">{{ pageMeta['description_' + $i18n.locale] }}</p>
        </div>
        <appImage v-if="pageMeta.image" :image="pageMeta.image" class="bot mx-auto sm:mx-0 mt-12 sm:mt-0 md:ltr:pl-8 md:rtl:pr-8 md:py-8" />
      </div>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
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
  .bot {
    width: 350px;
    height: auto;
  }

  @screen lg {
    .bot {
      width: 400px;
    }
  }

</style>
