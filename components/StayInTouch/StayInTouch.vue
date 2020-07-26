<template>
  <div class="bg-josa-blue-dark text-white pb-12">
    <div class="pt-12 ltr:pl-12 ltr:pr-4 rtl:pr-12 rtl:pl-4 w-full">
      <h2 class="title">{{ $t('stayInTouch.title') }}</h2>
    </div>
    <div class="flex flex-wrap">
      <div class="px-12 w-full lg:w-1/2">
        <p class="mb-4"><strong>{{ $t('stayInTouch.text1') }}</strong></p>
        <p class="mb-4">{{ $t('stayInTouch.text2') }}</p>
        <div class="social-media-links">
          <a class="mb-4 button button-light" href="https://facebook.com/jordanopensource" target="_blank">
            <font-awesome-icon class="ltr:mr-2 rtl:ml-2" :icon="['fab', 'facebook-square']" />
            {{ $t('socialMedia.fbPage') }}</a>
          <a class="mb-4 button button-light" href="https://facebook.com/groups/jordanopensource/" target="_blank">
            <font-awesome-icon class="ltr:mr-2 rtl:ml-2" :icon="['fab', 'facebook-square']" />
            {{ $t('socialMedia.fbGroup') }}</a>
          <a class="mb-4 button button-light" href="https://twitter.com/jo_osa" target="_blank">
            <font-awesome-icon class="ltr:mr-2 rtl:ml-2" :icon="['fab', 'twitter']" />
            {{ $t('socialMedia.twitter') }}</a>
          <a class="mb-4 button button-light" href="https://instagram.com/jordanopensource" target="_blank">
            <font-awesome-icon class="ltr:mr-2 rtl:ml-2" :icon="['fab', 'instagram']" />
            {{ $t('socialMedia.instagram') }}</a>
        </div>
      </div>
      <div class="w-full px-12 lg:w-1/2 lg:ltr:pr-0 lg:ltr:pl-15px lg:rtl:pl-0 lg:rtl:pr-15px relative">
        <img id="bot-1" class="lg:absolute" src="~/static/images/bots/bot-2.svg" alt="bot-1">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JoinUs',
  }

</script>

<style scoped>
  .social-media-links a {
    display: block;
  }

</style>
