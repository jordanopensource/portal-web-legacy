<!-- Fetch and list careers based on career types-->
<template>
  <section v-if="ifNotEmpty()">
    <h3 v-if="title">{{ title }}</h3>
    <careerPreview v-for="career in loadedCareers" :key="career.id" :id="'career' + career.id" :career="career" />
  </section>
</template>

<script>
  import careerPreview from '@/components/Careers/CareerPreview';
  import axios from 'axios';

  export default {
    data() {
      return {
        sortBy: 'publishDate:DESC',
        loadedCareers: []
      }
    },
    components: {
      careerPreview
    },
    props: {
      title: {
        type: String
      },
      careerType: {
        type: String,
        required: true
      },
      numberOfCareers: {
        type: Number,
      }
    },
    created() {
      this.fetchCareers()
    },
    methods: {
      query() {
        var args = []
        var query = ""

        if (this.numberOfCareers) {
          let q = "_limit=" + this.numberOfCareers;
          args.push(q)
        }
        if (this.sortBy) {
          let q = "_sort=" + this.sortBy;
          args.push(q)
        }
        if (this.careerType && this.careerType != "all") {
          let q = "careerType.name=" + this.careerType;
          args.push(q)
        }
        query = args.join("&")
        return query
      },
      async fetchCareers() {
        const query = this.query()
        await axios
          .get(process.env.baseUrl + "/careers?" + query)
          .then(res => {
            const careersArray = []
            for (const key in res.data) {
              careersArray.push({
                ...res.data[key]
              })
            }
            this.loadedCareers = careersArray
          })
          .catch(e => this.context.error(e));
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedCareers) && this.loadedCareers.length)
          return true;
        else
          return false;
      }
    }
  }

</script>
