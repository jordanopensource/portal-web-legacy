<template>
  <section class="grid gap-4 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <MemberPreview
      v-for="member in members"
      :key="member.id"
      :member="member" />
  </section>
</template>

<script>
import MemberPreview from '~/components/Members/MemberPreview';

export default {
  components: {
    MemberPreview
  },
  props: {
    members: {
      type: Array,
      required: true
    }
  }
}
</script>
