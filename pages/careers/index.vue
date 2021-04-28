<template>
  <div class="career-page">
    <!-- Banner -->
    <pageBanner :pageMeta="careerMeta" />
    <!-- Menu -->
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-6 md:px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('careers.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in careerCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ cat['title_' + $i18n.locale] }}</span>
        </div>
      </div>
    </div>
    <!-- Preview -->
    <div class="container pb-20">
      <div v-for="cat in careerCategories" :key="cat.id">
        <careerList v-if="activeCat=='all' || activeCat==cat.name" class="career-list" :careerType="cat.name"
          :title="cat['title_' + $i18n.locale]" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import careerList from "@/components/Careers/CareerList";
  import appButton from '@/components/FormComponents/AppButton';
  import pageBanner from "@/components/UI/PageBanner";

  export default {
    data() {
      return {
        title: "JOSA's Careers",
        activeCat: 'all'
      }
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.careerMeta['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            hid: 'careers',
            name: 'careers'
          },
          {
            name: 'description',
            content: this.careerMeta['metaDescription_' + this.$i18n.locale] ? this.careerMeta['metaDescription_' +
              this.$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      careerList,
      appButton,
      pageBanner
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=careers');
      const cats = await axios.get(process.env.baseUrl + '/career-types');
      return {
        careerMeta: pageMeta.data[0],
        careerCategories: cats.data
      }
    },
    methods: {
      setActiveCat(cat) {
        this.activeCat = cat
      }
    }
  };
</script>

<style scoped>
  .career-list {
    @apply px-6 mt-20;
  }

  @screen md{
    .career-list {
    @apply px-12 mt-20;
  }
  }
</style>