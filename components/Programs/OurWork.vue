<template>
  <div>
    <h2 class="title relative py-6 px-0">{{ $t('pages.ourWork') }}</h2>
    <programList />
  </div>
</template>

<script>
  import programList from '@/components/Programs/ProgramsList';
  export default {
    name: 'OurWork',
    components: {
      programList,
    },
  }

</script>
