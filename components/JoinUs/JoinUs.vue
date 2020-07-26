<template>
  <div class="bg-josa-blue-dark text-white pb-12">
    <div class="pt-12 ltr:pl-12 ltr:pr-4 rtl:pr-12 rtl:pl-4 w-full">
      <h2 class="title">{{ $t('joinUs.title') }}</h2>
    </div>
    <div class="flex flex-wrap">
      <div class="px-12 w-full lg:w-1/2">
        <p class="mb-4"><strong>{{ $t('joinUs.text1') }}</strong></p>
        <p class="mb-4">{{ $t('joinUs.text2') }}</p>
        <nuxt-link class="mb-4 button button-blue-full" to="#" tag="a">{{ $t('button.joinJosa') }}</nuxt-link>
      </div>
      <div class="w-full px-12 lg:w-1/2 lg:ltr:pr-0 lg:ltr:pl-15px lg:rtl:pl-0 lg:rtl:pr-15px relative">
        <img id="bot-1" class="lg:absolute" src="~/static/images/bots/bot-1.svg" alt="bot-1">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JoinUs',
  }

</script>
