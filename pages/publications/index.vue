<template>
  <div class="publication-page">
    <!-- Banner -->
    <pageBanner :pageMeta="pageInfo" />
    <!-- Categories Menu -->
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-6 md:px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('publicationCats.title.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in categories" :key="cat.id"
            @click="setActiveCat(cat.name)">{{ cat['title_' + $i18n.locale] }}</span>
        </div>
      </div>
    </div>
    <!-- List -->
    <div class="container pb-20">
      <p v-if="$fetchState.pending" class="publication-list">{{ $t('meta.loading')+'...' }}</p>
      <publicationList class="publication-list" v-if="$fetchState.timestamp && filteredList.length>=1"
        :publicationsList="filteredList" :category="activeCat" :key="activeCat" />
      <p v-if="!$fetchState.pending && filteredList.length<1" class="publication-list">{{ $t('meta.nothing')}}</p>
    </div>
  </div>
</template>

<script>
  import publicationList from "@/components/Publications/PublicationList";
  import pageBanner from "@/components/UI/PageBanner";
  import Vue2Filters from 'vue2-filters';
  export default {
    mixins: [Vue2Filters.mixin],
    layout: "default",
    components: {
      publicationList,
      pageBanner
    },
    data() {
      return {
        activeCat: 'all',
        categories: null,
        list: [],
      }
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
        return this.$store.state.pages.publications
      },
      filteredList() {
        if (this.activeCat != "all" && this.list.length) {
          return this.filterBy(this.list, this.activeCat, 'category.name')
        } else {
          return this.list
        }
      },
    },
    async fetch() {
      let cats = this.$store.state.publications.categories
      if (!cats) {
        await this.$store.dispatch("publications/fetchCats")
      }
      this.categories = this.$store.state.publications.categories
      let list = this.$store.state.publications.list
      if (!list) {
        await this.$store.dispatch("publications/fetchList")
      }
      this.list = this.$store.state.publications.list
    },
    methods: {
      setActiveCat(cat) {
        this.activeCat = cat
      }
    },
  };
</script>

<style scoped>
  .publication-list {
    @apply px-6 mt-20;
  }

  @screen md {
    .publication-list {
      @apply px-12;
    }
  }
</style>