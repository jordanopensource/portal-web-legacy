<template>
  <div>
    <programPreview v-for="program in loadedPrograms" :key="program.id" :id="'program-' + program.id"
      :program="program" />
  </div>
</template>

<script>
  import axios from 'axios';
  import programPreview from '@/components/Programs/ProgramPreview';
  export default {
    name: 'ProgramsList',
    data() {
      return {
        loadedPrograms: [],
      }
    },
    components: {
      programPreview
    },
    created() {
      this.fetchPrograms()
    },
    methods: {
      async fetchPrograms() {
        await axios
          .get(process.env.baseUrl + "/programs")
          .then(res => {
            const programsArray = []
            for (const key in res.data) {
              programsArray.push({
                ...res.data[key]
              })
            }
            this.loadedPrograms = programsArray
          })
          .catch(e => this.context.error(e));
      }
    }
  }

</script>
