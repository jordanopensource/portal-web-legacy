<template>
  <div class="flex flex-wrap md:flex-no-wrap w-full pt-4 border-t border-dotted">
    <nuxt-link :to="memberLink">
      <appImage :image="member.profilePicture" size="small" class="memberPicture ltr:mr-4 rtl:ml-4 mb-4" />
    </nuxt-link>
    <div class="mb-4">
      <nuxt-link :to="memberLink">
        <h2>{{ member.fullName }}</h2>
      </nuxt-link>
      <p>{{ member.membershipType | capitalize }}</p>
    </div>


  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'MemberPreview',
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
      memberLink() {
        return '/members/' + this.member.id
      },
    }
  }

</script>


<style scoped>
  .memberPicture {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  @screen md {
    .memberPicture {
      width: 125px;
      height: 125px;
      object-fit: cover;
    }
  }

</style>
