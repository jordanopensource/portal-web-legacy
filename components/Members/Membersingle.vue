<template>
  <div class="p-12 bg-white">

    <div class="w-full flex flex-wrap md:flex-no-wrap">
      <div class="side md:ltr:mr-8 md:rtl:ml-8 mb-8">
        <appImage :image="member.profilePicture" size="small" class="picture" />
      </div>
      <div class="main">
        <section class="name-section">
          <h2 class="title">{{ member.fullName }}</h2>
          <div>
            <p v-for="(title,index) in titles" :key="index" class="display-lead">{{ title | capitalize }}</p>
          </div>
        </section>
      </div>
    </div>

    <div class="w-full flex flex-wrap md:flex-no-wrap">
      <div class="side md:ltr:mr-8 md:rtl:ml-8 mb-4">
        <section class="membership-type">
          <img class="josa-icon ltr:mr-2 rtl:ml-2" src="/logo/favicon.png">
          <p class="membership-text">{{ member.membershipType | uppercase }}</p>
        </section>
        <section>
          <h5>member id</h5>
          <p class="member-id">{{ member.membershipId }}</p>
          <h5>member since</h5>
          <p class="member-since">{{ member.memberSince | monthYear($i18n.locale) }}</p>
        </section>
      </div>
      <div class="main">
        <section>
          <h3>about</h3>
          <div>{{ member.about}}</div>
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
  import appImage from '~/components/UI/appImage';
  export default {
    components: {
      appImage
    },
    props: {
      member: {
        type: Object,
        required: true
      }
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
  .picture {

    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .side {
    width: 100%;
  }

  @screen md {
    .picture {
      width: 200px;
      height: 200px;
    }

    .side {
      width: 200px;
      @apply flex-shrink-0
    }
  }

  .main {
    @apply flex-grow mb-8;
  }

  section {
    @apply py-4 border-b border-dotted;
  }

  .name-section {
    @apply pt-0 h-full flex flex-col justify-between;
  }

  h3 {
    @apply mb-4 text-josa-blue uppercase;
  }

  .interest {
    @apply inline-block m-2 py-1 rounded-md px-4 bg-grey90 opacity-90;
  }

  .membership-type {
    @apply flex items-center;
  }

  .josa-icon {
    @apply rounded-md;
    width: 32px;
    height: 32px;
  }

  .membership-text {
    @apply font-semibold text-josa-warm-grey-dark text-sm
  }

</style>
