<template lang="html">
  <nav>
    <!-- Menu Links -->
    <nuxt-link class="nav-link" tag="a" to="#">{{ $t('pages.aboutJosa') }}</nuxt-link>
    <nuxt-link class="nav-link" tag="a" to="#">{{ $t('pages.ourWork') }}</nuxt-link>
    <nuxt-link class="nav-link" tag="a" to="#">{{ $t('pages.takeAction') }}</nuxt-link>
    <nuxt-link class="nav-link" tag="a" to="#">{{ $t('pages.connect') }}</nuxt-link>

    <!-- Login/Logout -->
    <LogInOut />

    <!-- Language Switcher -->
    <span class="inline-flex">
      <nuxt-link class="nav-link lang" tag="a" :to="switchLocalePath('en')">En</nuxt-link><span
        class="vertical-line"></span>
      <nuxt-link class="nav-link lang" tag="a" :to="switchLocalePath('ar')">ع</nuxt-link>
    </span>

  </nav>
</template>

<script>
  import LogInOut from '@/components/Auth/LogInOutMenu';
  export default {
    name: 'Navbar',
    components: {
      LogInOut
    }
  }

</script>

<style scoped>
  .lang {
    @apply text-sm opacity-50
  }

  .lang.nuxt-link-active {
    @apply opacity-100
  }

  .vertical-line {
    @apply border-l my-2
  }
</style>
