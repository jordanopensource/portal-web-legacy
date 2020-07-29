<template>
  <div class="bg-josa-warm-grey">
    <h2 class="title ">{{ $t('joinSlack.title') }}</h2>

    <div class="pb-8">
      <p>{{ $t('joinSlack.text') }}</p>
    </div>

    <a class="mb-4 button button-blue-full"
      href="https://docs.google.com/forms/d/e/1FAIpQLScAHhgfIM19skn1PejQkmojqzI_a3uF-qgMrDQD16Ge-miGBQ/viewform"
      target="_blank">
      <font-awesome-icon class="ltr:mr-2 rtl:ml-2" :icon="['fab', 'slack']" />
      {{ $t('button.joinSlack') }}</a>
  </div>
</template>

<script>
  export default {
    name: 'JoinSlack',
  }

</script>
