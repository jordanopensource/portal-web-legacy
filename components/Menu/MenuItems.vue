<template>
  <div class="links">
    <span v-for="(item ,index) in orderBy(menu.menuItems, 'weight')" :key="index">
      <a v-if="external(item.path)" :href="item.path" active-class="active" :class="menuItemClass">{{ item['label_' + $i18n.locale] }}</a>
      <nuxt-link v-else :to="localePath(item.path)" active-class="active" :class="menuItemClass">{{ item['label_' + $i18n.locale] }}</nuxt-link>
    </span>
  </div>
</template>

<script>
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    props: {
      menu: {
        type: Object,
        required: true
      },
      menuItemClass: {
        type: String
      }
    },
    methods: {
      external(path) {
        var re = new RegExp("^(http|https)://", "i");
        return re.test(path);
      }
    }
  }
</script>