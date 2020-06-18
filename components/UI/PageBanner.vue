<template>
<div class="flex flex-row justify-between align-middle flex-wrap sm:flex-no-wrap py-12 px-12">
  <div class="my-auto sm:max-w-1/2 lg:max-w-1/4">
  <h2 class="italic mb-6">{{ pageMeta.title | capitalize }}</h2>
  <p class="text-xs mb-8">{{ pageMeta.description }}</p>
  </div>
  <appImage :image="pageMeta.image" class="bot mx-auto sm:mx-0"/>
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
    width: 200px;
  }
  @screen lg {
    .bot {
      width: 250px;
    }
  }
</style>
