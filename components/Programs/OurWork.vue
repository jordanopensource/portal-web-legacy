<template>
  <div>
    <h2 class="pb-2" v-if="title">{{ title }}</h2>
    <programsList class="grid grid-cols-1 md:grid-cols-2 col-gap-20" />
  </div>
</template>

<script>
  import programsList from '~/components/Programs/ProgramsList';
  export default {
    name: 'OurWork',
    components: {
      programsList,
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }

</script>
