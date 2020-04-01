<template>
<div class="bg-josa-blue-dark text-white pb-12">
  <div class="pt-12 pl-12 pr-4 w-full">
    <h2 class="title">{{ $t('stayInTouch.title') }}</h2>
  </div>
  <div class="flex flex-wrap">
    <div class="px-12 w-full lg:w-1/2">
      <p class="mb-4"><strong>{{ $t('stayInTouch.text1') }}</strong></p>
      <p class="mb-4">{{ $t('stayInTouch.text2') }}</p>
      <div class="social-media-links">
        <a class="mb-4 button button-light" 
        href="https://facebook.com/jordanopensource" target="_blank"> 
        <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-square']"/>
        {{ $t('socialMedia.fbPage') }}</a>
        <a class="mb-4 button button-light" 
        href="https://facebook.com/groups/jordanopensource/" target="_blank">
        <font-awesome-icon class="mr-2" :icon="['fab', 'facebook-square']"/>
        {{ $t('socialMedia.fbGroup') }}</a>
        <a class="mb-4 button button-light" 
        href="https://twitter.com/jo_osa" target="_blank">
        <font-awesome-icon class="mr-2" :icon="['fab', 'twitter']"/>
        {{ $t('socialMedia.twitter') }}</a>
        <a class="mb-4 button button-light" 
        href="https://instagram.com/jordanopensource" target="_blank">
        <font-awesome-icon class="mr-2" :icon="['fab', 'instagram']"/>
        {{ $t('socialMedia.instagram') }}</a>
      </div>
    </div>
    <div class="w-full px-12 lg:w-1/2 lg:pr-0 lg:pl-15px relative">
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
.title {
  @apply relative py-6;
}

.title::before {
  content: '';
  position: absolute;
  width: 20%;
  height: 10px;
  left: 0;
  top: 0;
  border-top: 10px solid #3897c0;
}

#bot-1 {
  @apply w-full m-auto p-5;
  max-width: 250px;
  right: -20px;
  bottom: 0;
}

@screen lg {
  #bot-1 {
    max-width: 500px;
  }
}

.social-media-links a {
  display: block;
}
</style>
