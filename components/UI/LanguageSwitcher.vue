<template>
  <span>
    <nuxt-link v-for="locale in locales" :key="locale.code" :to="switchLocalePath(locale.code)"
      class="nav-link lang nav-link-last">{{ locale.name }}</nuxt-link>
  </span>
</template>

<script>
  export default {
    computed: {
      locales() {
        const locales = this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale);
        return locales
      }
    }
  }

</script>
