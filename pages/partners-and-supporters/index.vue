<template>
  <div class="partners-page">
    <!-- Banner -->
    <pageBanner :pageMeta="pageInfo" />
    <!-- Lists -->
    <div class="container pb-20">
      <partnersList v-if="$fetchState.timestamp" class="partners-list" :title="$t('partners.title')"
        :partners="partners" />
    </div>
  </div>

</template>

<script>
  import pageBanner from "@/components/UI/PageBanner";
  import partnersList from '@/components/Partners/PartnersList';

  export default {
    data() {
      return {
        partners: []
      }
    },
    components: {
      pageBanner,
      partnersList
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageInfo['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.pageInfo['metaDescription_' + this.$i18n.locale] ? this.pageInfo['metaDescription_' + this
              .$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageInfo() {
        return this.$store.state.pages.partners
      },
    },
    async fetch() {
      let partnersList = this.$store.state.partners.list
      if (!partnersList) {
        await this.$store.dispatch("partners/fetch")
      }
      this.partners = this.$store.state.partners.list
    },
  };
</script>

<style scoped>
  .partners-list {
    @apply px-6 mt-20;
  }

  @screen md {
    .partners-list {
      @apply px-12;
    }
  }
</style>