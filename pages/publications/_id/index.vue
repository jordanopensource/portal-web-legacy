<template>
  <publicationSingle :publication="publication" />
</template>

<script>
  import axios from 'axios';
  import publicationSingle from '~/components/Publications/PublicationSingle';
  export default {
    layout: "general",
    asyncData(context) {
      return axios.get(process.env.baseUrl + '/publications/' + context.params.id)
        .then(res => {
          return {
            publication: res.data
          }
        })
        .catch(e => context.error(e))
    },
    components: {
      publicationSingle
    },
    head() {
      return {
        title: this.pageTitle,
        meta: [{
          hid: 'publication',
          name: 'Publication'
        }]
      }
    },
    computed: {
      pageTitle() {
        return this.publication.title
      }
    }
  };

</script>
