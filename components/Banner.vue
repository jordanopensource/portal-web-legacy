<template>
  <div id="banner" class="bg-josa-blue-dark pt-12">
    <div class="container">
      <div class="flex flex-col md:flex-row px-15px">
        <div class="w-full md:w-4/12 flex items-center pr-15px pb-15px">
        <h2 class="display-light text-3xl lg:text-4xl pb-2 text-center md:text-left">{{ $t('banner.text') }}</h2>
        </div>
        <div class="w-full md:w-8/12 relative">
          <img class="banner-img" src="~assets/images/bots/bots.svg" alt="JOSA Bots">
        </div>
      </div>
      <div class="floor"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
 .floor {
   height: 100px;
   margin-top: -40px;
   @apply bg-josa-blue w-full z-0;
 }
 .banner-img {
   @apply h-full align-middle inline object-contain;
 }

</style>
