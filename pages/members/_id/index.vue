<template>
  <div class="container bg-josa-warm-grey-light">
    <div class="my-12 px-12">
      <memberSingle :member="member" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import memberSingle from '~/components/Members/Membersingle'
  export default {
    layout: "memberProfile",
    asyncData(context) {
      return axios.get(process.env.baseUrl + '/users/' + context.params.id)
        .then(res => {
          return {
            member: res.data
          }
        })
        .catch(e => context.error(e))
    },
    components: {
      memberSingle
    }
  };

</script>
