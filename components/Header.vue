<template lang="html">
<header class="bg-josa-blue-dark pt-12">
  <div class="container">
    <div class="container flex items-center justify-between flex-wrap sm:flex-no-wrap">
      <div class="flex items-center flex-shrink-0">
          <nuxt-link id="brand" tag="div" :to="homePath">
            <a><img class="max-w-240" src="~/static/logo/logo.svg" alt="Jordan Open Source Association Logo"></a>
          </nuxt-link>
      </div>

      <div class="block sm:hidden">
        <button @click="isOpen = !isOpen" class="flex items-center">
          <svg class="svg-inline--fa menu-icon" aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path v-if="!isOpen" fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            <path v-if="isOpen" fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
          </svg>
        </button>
      </div>

      <navbar :class="isOpen ? 'block' : 'hidden'" class="w-full sm:block sm:text-right flex-grow mt-4 sm:m-0 " />
    </div>
</div>
</header>
</template>

<script>
import Navbar from './Navbar';
export default {
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    homePath({ app }) {
      return app.localePath('index')
    }
  },
  components: {
    'navbar': Navbar
  },
}
</script>

<style lang="css" scoped>
  .menu-icon {
    @apply text-white w-8 h-8 !important;
  }


</style>
