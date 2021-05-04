<!-- Fetch and list board and staff personnels based on role-->
<template>
  <section>
    <h2>{{ title }}</h2>
    <div class="mt-8" v-if="compact">
      <div v-for="personnel in loadedPersonnels" :key="personnel.id" :id="personnel.id">{{ personnel['fullName_' + $i18n.locale] }}</div>
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <boardStaffSingle v-for="personnel in loadedPersonnels" :key="personnel.id" :id="personnel.id"
        :personnel="personnel" />
    </div>
  </section>
</template>

<script>
  import BoardStaffSingle from '@/components/BoardStaff/BoardStaffSingle';
  import axios from 'axios';
  export default {
    data() {
      return {
        sortBy: 'created_at:ASC',
        loadedPersonnels: [],
      }
    },
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
      }
    },
    created() {
      this.fetchPersonnels()
    },
    methods: {
      query() {
        var args = []
        var query = ""
        if (this.sortBy) {
          let q = "_sort=" + this.sortBy;
          args.push(q)
        }
        if (this.role && this.role != "all") {
          let q = "role=" + this.role;
          args.push(q)
        }
        query = args.join("&")
        return query
      },
      async fetchPersonnels() {
        const query = this.query()
        await axios
          .get(process.env.baseUrl + "/board-and-staffs?" + query)
          .then(res => {
            const personnelsArray = []
            for (const key in res.data) {
              personnelsArray.push({
                ...res.data[key]
              })
            }
            this.loadedPersonnels = personnelsArray
          })
          .catch(e => this.context.error(e));
      }
    }
  }

</script>
