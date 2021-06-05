<!-- Fetch and list board and staff personnels based on role-->
<template>
  <section v-if="filteredByRole.length">
    <h2>{{ title }}</h2>
    <div class="mt-8" v-if="compact">
      <div v-for="item in filteredByRole" :key="item.id" :id="item.id">{{ item['fullName_' + $i18n.locale] }}</div>
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <boardStaffSingle v-for="item in filteredByRole" :key="item.id" :id="item.id" :personnel="item" />
    </div>
  </section>
</template>

<script>
  import BoardStaffSingle from '@/components/BoardStaff/BoardStaffSingle';
  export default {
    components: {
      BoardStaffSingle
    },
    props: {
      title: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      compact: {
        type: Boolean,
        default: false
      },
      teamList: {
        type: Array,
        required: true
      },
    },
    computed: {
      filteredByRole() {
        return this.teamList.filter(p => p.role == this.role)
      }
    }
  }
</script>