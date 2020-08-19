<template>
  <div class="container">
    <div class="p-12">
      <programPreview :id="'program-' + program.id" :program="program" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import programPreview from '~/components/Programs/ProgramPreview';

  export default {
    layout: "default",
    asyncData(context) {
      return axios.get(process.env.baseUrl + '/programs/' + context.params.id)
        .then(res => {
          return {
            program: res.data
          }
        })
        .catch(e => context.error(e))
    },
    components: {
      programPreview
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageTitle,
        meta: [{
            hid: 'program',
            name: 'Program'
          },
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageTitle() {
        try {
          return this.program['title_' + this.$i18n.locale]
        } catch {
          return this.program['title_en']
        }
      }
    }
  };

</script>
