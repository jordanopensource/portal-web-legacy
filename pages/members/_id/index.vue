<template>
  <div class="container my-8 bg-josa-warm-grey-light">
    <div class="row p-4">
      <div class="side">
        <section>
          <appImage :image="member.profilePicture" size="small" class="w-full" />
          <div class="membership-type">
            <img class="josa-icon ltr:mr-2 rtl:ml-2" src="/logo/favicon.png">
            <p class="membership-text">{{ member.membershipType | uppercase }}</p>
          </div>
        </section>
        <section>
          <div>
            <h5>member id</h5>
            <p class="member-id">{{ member.membershipId }}</p>
          </div>
          <div>
            <h5>member since</h5>
            <p class="member-since">{{ member.memberSince | monthYear($i18n.locale) }}</p>
          </div>
        </section>
      </div>

      <div class="main">
        <section>
          <h2 class="title">{{ member.fullName }}</h2>
          <div v-for="(title,index) in titles" :key="index" class="display-lead">
            {{ title | capitalize }}
          </div>
        </section>
        <section>
          <h3>about</h3>
          <div>
            {{ member.about}}
          </div>
        </section>
        <section>
          <h3>interests</h3>
          <div class="-mx-2">
            <span v-for="(interest,index) in interests" :key="index" class="interest">
              {{ interest | lowercase | capitalize({ onlyFirstLetter: true }) }}
            </span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import appImage from '~/components/UI/appImage';
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
      appImage
    },
    computed: {
      titles() {
        try {
          const titles = this.$options.filters.stringToArray(this.member.titles)
          return titles
        } catch {
          return []
        }
      },
      interests() {
        try {
          const interests = this.$options.filters.stringToArray(this.member.interests)
          return interests
        } catch {
          return []
        }
      }
    },
  };

</script>

<style scoped>
  .side {
    @apply w-1/4 p-4;
  }

  .main {
    @apply w-3/4 p-4;
  }

  .side section {
    @apply mb-4 pb-4 border-b border-dotted;
  }

  .main section {
    @apply mb-8 pb-8 border-b border-dotted;
  }

  h3 {
    @apply mb-4 text-josa-blue uppercase;
  }

  .interest {
    @apply inline-block m-2 py-1 rounded-md px-4 bg-grey90 opacity-90;
  }

  .membership-type {
    @apply mt-4 flex;
  }

  .josa-icon {
    @apply rounded-md;
    width: 32px;
    height: 32px;
  }

  .membership-text {
    @apply font-semibold leading-none text-josa-warm-grey-dark text-sm
  }

  .member-id {}

</style>
