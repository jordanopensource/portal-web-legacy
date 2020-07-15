<template>
  <div class="mt-6">
    <span v-for="account in accounts" :key="account.id" class="text-2xl mr-3">
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
        type: Object,
        required: true
      }
    }
  }

</script>

<style>

</style>
