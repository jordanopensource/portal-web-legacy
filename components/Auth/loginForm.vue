<template>
  <div class="w-full">
    <AppControlInput v-model="username" controlType="email" :label="$t('auth.email')"></AppControlInput>
    <AppControlInput v-model="password" controlType="password" :label="$t('auth.password')"></AppControlInput>
    <div class="ltr:text-right rtl:text-left">
      <button @click="postLogin" class="button button-blue-full">{{ $t('auth.login') }}</button>
    </div>
  </div>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined
  import axios from 'axios';
  import AppControlInput from "@/components/FormComponents/AppControlInput";
  import AppButton from "@/components/FormComponents/AppButton";

  export default {
    middleware: 'notAuthenticated',
    data() {
      return {
        username: null,
        password: null
      }
    },
    components: {
      AppControlInput,
      AppButton,
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
            Cookie.set('auth', auth, {
              sameSite: 'lax',
              secure: true
            }) // saving token in cookie for server rendering
            this.$router.push('/')
          })
          .catch(error => {
            console.log('An error occurred:', error.response);
          });
      }
    },
  }

</script>
