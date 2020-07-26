<template>
  <div>
    <Program v-for="program in programs" :key="program.id" :id="program.id" :thumbnail="program.thumbnail"
      :title="program.title" :subtitle="program.subtitle" :description="program.description" />
  </div>
</template>

<script>
  import Program from '@/components/Programs/Program';
  export default {
    name: 'ProgramsList',
    components: {
      'Program': Program,
    },
    props: {
      programs: {
        type: Array,
        required: true
      }
    },
  }

</script>
