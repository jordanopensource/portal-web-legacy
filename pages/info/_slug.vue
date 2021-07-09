<template>
  <div>
    <pageBanner :pageMeta="page" v-if="$fetchState.timestamp && page" />
    <div class="container py-20">
      <div class="px-6 md:px-12 flex flex-wrap md:flex-no-wrap" v-if="$fetchState.timestamp && page">
        <!-- Sections Menu -->
        <div class="sections-menu md:ltr:pr-12 md:rtl:pl-12 pb-8 md:pb-0 w-full md:w-1/4 flex-shrink-0">
          <div v-for="section in page.section" :key="section.sectionId"
            :class="activeSection == section.sectionId ? 'active': ''" class="section-link"
            @click="setActiveSection(section.sectionId)">
            <span v-if="section['title_' + $i18n.locale]">{{ section['title_' + $i18n.locale] }}</span>
            <span v-else></span>
          </div>
        </div>
        <!-- Section Content -->
        <template v-for="section in page.section">
          <div :key="section.sectionId" v-if="activeSection == section.sectionId" class="section-content flex-grow">
            <span v-if="section['description_' + $i18n.locale]" v-html="section['description_' + $i18n.locale]"></span>
            <span v-else></span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import pageBanner from "~/components/UI/PageBanner";
  export default {
    layout: "default",
    data() {
      return {
        page: null,
        activeSection: ''
      }
    },
    components: {
      pageBanner
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageTitle + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
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
          return this.page['title_' + this.$i18n.locale]
        } catch {
          return ''
        }
      },
      pageDesc() {
        try {
          return this.page['description_' + this.$i18n.locale]
        } catch {
          return ''
        }
      }
    },
    methods: {
      setActiveSection(section) {
        this.activeSection = section
      },
    },
    async fetch() {
      let pagesList = this.$store.state.infopages.list
      if (!pagesList) {
        await this.$store.dispatch("infopages/fetch")
      }
      let page = this.$store.state.infopages.list.find(p => p.pageId == this.$route.params.slug)
      if (!page) {
        this.$nuxt.error({
          statusCode: 404,
          message: 'This page could not be found'
        })
      }
      this.page = page
      this.activeSection = page.section.length ? page.section[0].sectionId : ''
    },
  }
</script>

<style scoped>
  .section-link {
    @apply text-josa-warm-grey-dark cursor-pointer relative mb-3 leading-relaxed;
  }

  .section-link:hover,
  .section-link.active {
    @apply text-black;
  }

  .section-link:hover:before,
  .section-link.active:before {
    content: "";
    background-color: #a3d1e4;
    height: 100%;
    width: 8px;
    display: block;
    position: absolute;
  }

  [dir="ltr"] .section-link:hover:before,
  [dir="ltr"] .section-link.active:before {
    left: -8px;
  }

  [dir="rtl"] .section-link:hover:before,
  [dir="rtl"] .section-link.active:before {
    right: -8px;
  }

  [dir="ltr"] .section-link {
    padding-left: 8px;
  }

  [dir="rtl"] .section-link {
    padding-right: 8px;
  }

  .section-content>>>p {
    @apply mb-4;
  }
</style>