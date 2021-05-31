<template>
  <div class="programs-page">

    <!-- Banner -->
    <pageBanner :pageMeta="pageInfo" />

    <!-- Lists -->
    <div class="container pb-20">
      <programsList class="programs-list" />
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
  import pageBanner from "~/components/UI/PageBanner";
  import programsList from '~/components/Programs/ProgramsList';

  export default {
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageInfo['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.pageInfo['metaDescription_' + this.$i18n.locale] ? this.pageInfo['metaDescription_' + this.$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      pageBanner,
      programsList
    },
    computed: {
      pageInfo() {
        return this.$store.state.pages.programs
      }
    },
  };
</script>

<style scoped>
  .programs-list {
    @apply px-6 mt-20;
  }

  @screen md {
    .programs-list {
      @apply px-12;
    }
  }
</style>