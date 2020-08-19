<template>
  <div class="event-page">

    <!-- Banner -->
    <pageBanner :pageMeta="eventMeta" />

    <!-- Menu -->
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('eventCats.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in eventCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ cat['title_' + $i18n.locale] }}</span>
        </div>
      </div>
    </div>

    <!-- Preview -->
    <div class="container pb-20">
      <eventList v-if="activeCat=='all'" class="event-list" category="all" />
      <div v-for="cat in eventCategories" :key="cat.id">
        <eventList v-if="activeCat==cat.name" class="event-list" :category="cat.name" />
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import eventList from "@/components/Events/EventList";
  import appButton from '@/components/FormComponents/AppButton';
  import pageBanner from "@/components/UI/PageBanner";

  export default {
    data() {
      return {
        title: "JOSA's Events",
        activeCat: 'all'
      }
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.eventMeta['title_' + this.$i18n.locale],
        meta: [{
            hid: 'events',
            name: 'events'
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      eventList,
      appButton,
      pageBanner
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=event');
      const cats = await axios.get(process.env.baseUrl + '/event-categories');
      return {
        eventMeta: pageMeta.data[0],
        eventCategories: cats.data
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
  .event-list {
    @apply px-12 mt-20;
  }

</style>
