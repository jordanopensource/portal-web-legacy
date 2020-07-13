<!-- Fetch and list publications based on publication categories-->
<template>
  <section v-if="ifNotEmpty()">
    <h3>{{ title }}</h3>
    <publicationPreview v-for="publication in loadedPublications" :key="publication.id" :id="publication.id"
      :publication="publication" />
  </section>
</template>

<script>
  import publicationPreview from '@/components/Publications/PublicationPreview';
  import axios from 'axios';
  export default {
    data() {
      return {
        sortBy: 'created_at:DESC',
        loadedPublications: [],
      }
    },
    components: {
      publicationPreview
    },
    props: {
      title: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      numberOfPublications: {
        type: Number,
        default: 1
      },
      featured: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.fetchPublications()
    },
    methods: {
      query() {
        var args = []
        var query = ""
        if (this.numberOfPublications) {
          let q = "_limit=" + this.numberOfPublications;
          args.push(q)
        }
        if (this.sortBy) {
          let q = "_sort=" + this.sortBy;
          args.push(q)
        }
        if (this.category && this.category != "all") {
          let q = "category.name=" + this.category;
          args.push(q)
        }
        if (this.featured) {
          let q = "tags_contains=featured"
          args.push(q)
        }
        query = args.join("&")
        return query
      },
      async fetchPublications() {
        const query = this.query()
        await axios
          .get(process.env.baseUrl + "/publications?" + query)
          .then(res => {
            const publicationsArray = []
            for (const key in res.data) {
              publicationsArray.push({
                ...res.data[key]
              })
            }
            this.loadedPublications = publicationsArray
          })
          .catch(e => this.context.error(e));
      },
      ifNotEmpty() {
        if (Array.isArray(this.loadedPublications) && this.loadedPublications.length)
          return true;
        else
          return false;
      }
    }
  }

</script>
