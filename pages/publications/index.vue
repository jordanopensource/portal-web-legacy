<template>
  <div class="publication-page">

    <!-- Banner -->
    <pageBanner :pageMeta="publicationMeta" />

    <!-- Menu -->
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-12 flex flex-col sm:flex-row">
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
        <publicationList v-if="activeCat=='all' || activeCat==cat.name" class="publication-list"
          :numberOfArticles="numArticles" :category="cat.name" :title="cat['title_' + $i18n.locale]" />
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
        title: "JOSA's Publications",
        activeCat: 'all'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [{
          hid: 'publication',
          name: 'publication'
        }]
      }
    },
    layout: "general",
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
    computed: {
      numArticles() {
        if (this.activeCat == 'all') {
          return 2
        } else {
          return 4
        }
      }
    }
  };

</script>

<style scoped>
  .publication-list {
    @apply px-12 mt-20;
  }

</style>
