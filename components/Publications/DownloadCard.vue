<template>
  <div class="download-card">
    <font-awesome-icon class="icon ltr:mr-3 rtl:ml-3" :icon="['fas', 'download']" />
    <div>
      <p class="font-bold ltr:leading-none rtl:leading-tight">{{ $t('meta.readTheReport') }}</p>
      <a :href="fileUrl" target="_blank">{{ $t('meta.download') }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DownloadCard',
    props: {
      fileLink: {
        required: true
      },
    },
    computed: {
      fileUrl() {
        return process.env.baseUrl + this.fileLink
      }
    }
  }

</script>

<style scoped>
  .download-card {
    @apply bg-josa-warm-grey-light p-8 flex align-top;

  }

  .icon {
    @apply text-josa-warm-grey-dark text-2xl;
  }

  a {
    @apply text-josa-blue;
  }

</style>
