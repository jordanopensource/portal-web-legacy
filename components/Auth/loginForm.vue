<template>
  <div class="container">
    <h2>Sign in</h2>
    <div>
      <label for="email">
        <input id="email" type="email" v-model="username" placeholder="Username or Email">
      </label>
      <label for="password">
        <input id="password" type="password" v-model="password" placeholder="Password">
      </label>
      <button @click="postLogin" class="button button-blue-full">
        login
      </button>
    </div>
  </div>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined
  import axios from 'axios';

  export default {
    middleware: 'notAuthenticated',
    data() {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      async postLogin() {
        await axios.post(process.env.baseUrl + '/auth/local', {
            identifier: this.username,
            password: this.password,
          })
          .then(response => {
            const auth = {
              accessToken: response.data.jwt
            }
            this.$store.commit('setAuth', auth) // mutating to store for client rendering
            Cookie.set('auth', auth, { sameSite: 'lax', secure: true }) // saving token in cookie for server rendering
            this.$router.push('/')
          })
          .catch(error => {
            console.log('An error occurred:', error.response);
          });
      }
    },
  }

</script>
