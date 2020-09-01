<template>
  <div class="links">
    <nuxt-link v-for="item in orderBy(menu.menuItems, 'weight')" :key="item.id" tag="a" :to="localePath(item.path)"
      active-class="active" :class="menuItemClass">{{ item['label_' + $i18n.locale] }}</nuxt-link>
  </div>
</template>

<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    props: {
      menu: {
        type: Object,
        required: true
      },
      menuItemClass: {
        type: String
      }
    },
    mixins: [Vue2Filters.mixin]
  }

</script>

<style scoped>

</style>
