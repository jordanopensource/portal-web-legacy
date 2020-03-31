<template lang="html">
  <nav>
    <nuxt-link class="nav-link" tag="a" to="#">About JOSA</nuxt-link><nuxt-link class="nav-link" tag="a" to="#">Our work</nuxt-link><nuxt-link class="nav-link" tag="a" to="#">Take Action!</nuxt-link><nuxt-link class="nav-link" tag="a" to="#">Connect</nuxt-link><nuxt-link class="nav-link lang" tag="a" :to="switchLocalePath('en')">En</nuxt-link><span class="vertical-line"></span><nuxt-link class="nav-link lang" tag="a" :to="switchLocalePath('ar')">ع</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="css" scoped>

.nav-link {
  @apply text-white p-2 uppercase block;
}

@screen sm {
  .nav-link {
    @apply inline-block;
  }
}
.lang {
  @apply text-sm opacity-50
}
.lang.nuxt-link-active {
@apply opacity-100
}
.vertical-line {
  @apply border-l
}
</style>