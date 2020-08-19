<template>
  <div class="text-center">
    <h2 class="pb-2" v-if="title">{{ title }}</h2>
    <programList class="grid grid-cols-2 lg:grid-cols-4 gap-8" />
  </div>
</template>

<script>
  import programList from '@/components/Programs/ProgramsList';
  export default {
    name: 'OurWork',
    components: {
      programList,
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }

</script>
