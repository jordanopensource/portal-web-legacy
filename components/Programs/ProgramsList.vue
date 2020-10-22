<template>
  <div>
    <programPreview v-for="program in programs" :key="program.id" :id="'program-' + program.id" :program="program"
      class="my-8 last:mb-0" />
  </div>
</template>

<script>
  import axios from 'axios';
  import programPreview from '~/components/Programs/ProgramPreview';
  export default {
    name: 'ProgramsList',
    props: {
      programs: {
        type: Array,
        required: true
      }
    },
    components: {
      programPreview
    },
  }
</script>