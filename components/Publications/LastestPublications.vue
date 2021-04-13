<!-- Fetch and list publications based on publication categories-->
<template>
  <section v-if="ifNotEmpty()">
    <div class="flex flex-wrap md:flex-no-wrap justify-between items-baseline">
      <h2>{{ title }}</h2>
      <nuxt-link to="/publications" class="text-josa-blue">{{ $t('publication.all') }}
       <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
      </nuxt-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 col-gap-20">
      <publicationCompact class="mt-8 md:my-12" v-for="publication in loadedPublications" :key="publication.id"
        :id="publication.id" :publication="publication" />
    </div>
  </section>
</template>

<script>
  import publicationCompact from '@/components/Publications/PublicationCompact';
  import axios from 'axios';
  export default {
    data() {
      return {
        sortBy: 'publishDate:DESC',
        loadedPublications: [],
      }
    },
    components: {
      publicationCompact
    },
    props: {
      title: {
        type: String,
        required: true
      },
      numberOfPublications: {
        type: Number,
        default: 0
      },
      category: {
        type: String,
        default: 'all'
      }
    },
    created() {
      this.fetchPublications()
    },
    methods: {
      query() {
        var args = []
        var query = ""
        if (this.numberOfPublications > 0) {
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
    },
    computed: {
      arrowIcon() {
        if (this.$i18n.locale == "ar") {
          return 'long-arrow-alt-left'
        } else {
          return 'long-arrow-alt-right'
        }
      }
    }
  }
</script>
