<template lang="html">
  <nav>
    <!-- Main Menu -->
    <menuItems :menu="mainMenu" menuItemClass="nav-link" class="inline-block" />

    <!-- Login/Logout -->
    <logInOutMenu />

    <!-- Language Switcher -->
    <span class="inline-flex">
      <nuxt-link class="nav-link lang" tag="a" :to="switchLocalePath('en')">En</nuxt-link><span
        class="vertical-line"></span>
      <nuxt-link class="nav-link lang" tag="a" :to="switchLocalePath('ar')">ع</nuxt-link>
    </span>

  </nav>
</template>

<script>
  import logInOutMenu from '@/components/Auth/LogInOutMenu';
  import menuItems from '@/components/Menu/MenuItems';
  export default {
    name: 'Navbar',
    components: {
      logInOutMenu,
      menuItems
    },
    computed: {
      mainMenu() {
        return this.$store.getters.loadedMenus.mainMenu;
      }
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
