<template>
  <div class="banner py-20 md:py-32">
    <div class="container">
      <div class="px-6 md:px-12 flex align-middle">
        <div class="my-auto sm:max-w-1/2 lg:max-w-1/3">
          <h2>{{ $t('joinUs.title') }}</h2>
          <p class="my-8">{{ $t('joinUs.desc') }}</p>
          <a href="https://members.jordanopensource.org" target="_blank"
            class="button-sharp button-dark-blue-full mb-8 inline-block">{{ $t('button.becomeAMember') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JoinUs',
  }
</script>

<style>
  .banner {
    @apply bg-josa-blue-light bg-right bg-no-repeat bg-contain;
    background-image: url("/images/bg/background2.svg");
  }

  [dir="rtl"] .banner {
    @apply bg-left;
    background-image: url("/images/bg/background2-flipped.svg");
  }

  @screen sm {
    .banner {
      background-image: url("/images/bg/background1.svg");
    }

    [dir="rtl"] .banner {
      @apply bg-left;
      background-image: url("/images/bg/background1-flipped.svg");
    }
  }
</style>