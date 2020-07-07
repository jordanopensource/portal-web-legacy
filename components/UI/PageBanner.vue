<template>
  <div id="banner" class="bg-josa-warm-grey-light">
    <div class="container">
      <div
        class="flex flex-row justify-between align-middle flex-wrap sm:flex-no-wrap pt-20 pb-40 px-12 bg-josa-warm-grey-light">
        <div class="my-auto sm:max-w-1/2 lg:max-w-1/4">
          <h4 class="font-aleoLightItalic mb-16">{{ pageMeta.displayTitle | capitalize }}</h4>
          <p class="leading-none">{{ pageMeta.description }}</p>
        </div>
        <appImage :image="pageMeta.image" class="bot mx-auto sm:mx-0 mt-12 sm:mt-0" />
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
