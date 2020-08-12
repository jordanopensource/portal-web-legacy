<template>
  <div id="login-page" class="bg-josa-warm-grey-light">
    <div class="container">
      <div class="mb-12 px-12">
        <div class="p-12 row">
          <h2 class="title m-0">{{ loginMeta['title_' + $i18n.locale] }}</h2>
          <p class="display-lead py-4">{{ loginMeta['description_' + $i18n.locale] }}</p>
          <div class="block w-full py-8">
            <hr>
          </div>
          <loginForm />
          <div class="block w-full py-8">
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  import loginForm from '@/components/Auth/loginForm'
  export default {
    layout: 'general',
    components: {
      loginForm
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=login');
      return {
        loginMeta: pageMeta.data[0]
      }
    }
  }

</script>

<style>
  hr {
    @apply border-dotted;
  }

</style>
