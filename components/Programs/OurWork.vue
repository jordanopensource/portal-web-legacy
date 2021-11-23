<template>
  <div id="our-work">
    <h2 class="pb-2" v-if="title">{{ title }}</h2>
    <programsList
      class="grid grid-cols-1 md:grid-cols-2 gap-x-20"
      :programs="programs"
    />
  </div>
</template>

<script>
import programsList from "~/components/Programs/ProgramsList";
export default {
  name: "OurWork",
  components: {
    programsList,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    programs: {
      type: Array,
      required: true,
    },
  },
};
</script>
