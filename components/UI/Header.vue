<template>
  <header class="header">
    <div class="container">
      <div class="px-12 flex justify-between flex-wrap lg:flex-no-wrap items-center">
        <div class="flex items-center flex-shrink-0">
          <nuxt-link id="brand" tag="div" :to="localePath('index')">
            <a>
              <img v-if="$i18n.locale == 'ar'" class="w-175 sm:w-240" src="~/static/logo/logo-colored-ar.svg"
                alt="الجمعية الأردنية للمصدر المفتوح">
              <img v-else class="w-175 sm:w-240" src="~/static/logo/logo-colored-en.svg"
                alt="Jordan Open Source Association Logo">
            </a>
          </nuxt-link>
        </div>

        <div class="block lg:hidden">
          <button @click="isOpen = !isOpen" class="flex items-end">
            <svg class="svg-inline--fa menu-icon" aria-hidden="true" focusable="false" data-prefix="fas" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path v-if="!isOpen" fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
              </path>
              <path v-if="isOpen" fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
              </path>
            </svg>
          </button>
        </div>

        <navbar :class="isOpen ? 'block' : 'hidden'"
          class="w-full lg:block lg:ltr:text-right lg:rtl:text-left flex-grow mt-4 lg:m-0 " />
      </div>
    </div>
  </header>
</template>

<script>
  import navbar from '~/components/UI/Navbar';
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
    components: {
      navbar
    },
  }

</script>

<style lang="css" scoped>
  .header {
    @apply bg-josa-warm-grey-light py-8;
    border-bottom: 1px solid #e0e0e0;
  }

  .menu-icon {
    @apply text-josa-black w-6 h-6 !important;
  }

  @screen sm {
    .menu-icon {
      @apply w-8 h-8 !important;
    }
  }

</style>
