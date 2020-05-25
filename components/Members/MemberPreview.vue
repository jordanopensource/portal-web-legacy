<template>
  <div class="card">
    <nuxt-link :to="memberLink">
      <appImage :image="member.profilePicture" size="small" />
      <h3>{{ member.fullName }}</h3>
    </nuxt-link>
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

</style>
