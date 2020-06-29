<!-- Login/Logout Menu Item -->
<template>
  <span class="nav-link">
    <button v-if="$store.getters.auth" @click="logout">LOGOUT</button>
    <NuxtLink v-else to="/login">LOGIN</NuxtLink>
  </span>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined;
  export default {
    name: 'LogInOutMenu',
    methods: {
      logout() {
        Cookie.remove('auth')
        this.$store.commit('setAuth', null)
      }
    }
  }

</script>