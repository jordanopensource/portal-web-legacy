<template>
  <div>
    <!-- <p v-if="$fetchState.pending">Loading</p> -->
    <programSingle v-if="$fetchState.timestamp && program.id" :id="'program-' + program.id" :program="program" />
  </div>
</template>

<script>
  import programSingle from '~/components/Programs/ProgramSingle';

  export default {
    layout: "default",
    data() {
      return {
        program: {}
      }
    },
    components: {
      programSingle
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageTitle + ' - ' + (this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح' :
          'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.pageDesc
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
      },
      pageDesc() {
        try {
          return this.program['metaDescription_' + this.$i18n.locale]
        } catch {
          return ''
        }
      }
    },
    async fetch() {
      let programsList = this.$store.state.programs.list
      if (!programsList) {
        await this.$store.dispatch("programs/fetch")
      }
      this.program = this.$store.state.programs.list.find(p => p.id == this.$route.params.id)
    },
  };
</script>