<template>
  <div class="publication-page">
    <!-- Banner -->
    <pageBanner :pageMeta="publicationMeta" />
    <!-- Menu -->
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-6 md:px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('publicationCats.title.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in publicationCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ cat['title_' + $i18n.locale] }}</span>
        </div>
      </div>
    </div>
    <!-- List -->
    <div class="container pb-20">
      <div v-for="cat in publicationCategories" :key="cat.id">
        <publicationList v-if="activeCat=='all' || activeCat==cat.name" class="publication-list" :category="cat.name"
          :title="cat['title_' + $i18n.locale]" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import publicationList from "@/components/Publications/PublicationList";
  import appButton from '@/components/FormComponents/AppButton';
  import pageBanner from "@/components/UI/PageBanner";

  export default {
    data() {
      return {
        activeCat: 'all'
      }
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.publicationMeta['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.publicationMeta['metaDescription_' + this.$i18n.locale] ? this.publicationMeta[
              'metaDescription_' + this.$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      publicationList,
      appButton,
      pageBanner
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=publications');
      const cats = await axios.get(process.env.baseUrl + '/publication-categories');
      return {
        publicationMeta: pageMeta.data[0],
        publicationCategories: cats.data
      }
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