<template>
  <programSingle :id="'program-' + program.id" :program="program" />
</template>

<script>
  import axios from 'axios';
  import programSingle from '~/components/Programs/ProgramSingle';

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
      programSingle
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageTitle + ' - ' + (this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح': 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.program['metaDescription_' + this.$i18n.locale] ? this.program[
              'metaDescription_' + this.$i18n.locale] : ''
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
