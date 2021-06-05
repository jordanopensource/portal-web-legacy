<template>
  <div>
    <span v-for="account in accounts" :key="account.id" class="text-2xl ltr:mr-3 rtl:ml-3">
      <a :href="account.url" target="_blank">
        <font-awesome-icon class="icon" :icon="['fab', icons[account.platform] ]" />
      </a>
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        icons: {
          twitter: 'twitter',
          github: 'github',
          linkedin: 'linkedin'
        }
      }
    },
    props: {
      accounts: {
        type: Array,
        required: true
      }
    }
  }

</script>

<style>

</style>
