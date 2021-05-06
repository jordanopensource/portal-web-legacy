<!-- Fetch and list partner based on partner categories-->
<template>
  <div v-if="ifNotEmpty()">
      <h2>{{ title }}</h2>
      <partnerPreview v-for="partner in loadedPartners" :key="partner.id" :id="partner.id" :partner="partner" />
  </div>
</template>

<script>
  import partnerPreview from '@/components/Partners/PartnerPreview';
  import axios from 'axios';
  export default {
    data() {
      return {
        sortBy: 'created_at:DESC',
        loadedPartners: [],
      }
    },
    components: {
      partnerPreview
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    created() {
      this.fetchPartners()
    },
    methods: {
      query() {
        var args = []
        var query = ""
        if (this.sortBy) {
          let q = "_sort=" + this.sortBy;
          args.push(q)
        }
        query = args.join("&")
        return query
      },
      async fetchPartners() {
        const query = this.query()
        await axios
          .get(process.env.baseUrl + "/partners?" + query)
          .then(res => {
            const partnersArray = []
            for (const key in res.data) {
              partnersArray.push({
                ...res.data[key]
              })
            }
            this.loadedPartners = partnersArray
          })
          .catch(e => this.context.error(e));
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedPartners) && this.loadedPartners.length)
          return true;
        else
          return false;
      }
    },
  }

</script>
