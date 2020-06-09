<template>
  <div class="members-page container">
    <div class="container flex justify-between flex-wrap content-center mb-4">
    <h2 class="title m-0">Members</h2>
    </div>
      <div>
        <MemberList :members="loadedMembers" />
    </div>
  </div>
</template>

<script>
import MemberList from "@/components/Members/MemberList";
export default {
  layout: "general",
  components: {
    MemberList,
  },
  computed: {
    loadedMembers() {
      return this.$store.getters.loadedMembers
    }
  },
  created() {
    this.$store.dispatch('fetchMembers')
  },
};
</script>


<style scoped>
</style>
