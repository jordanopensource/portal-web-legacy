<template>
  <div class="event-page">
    <!-- Banner -->
    <pageBanner :pageMeta="eventMeta" />
    <!-- Menu -->
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-6 md:px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('eventCats.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in eventCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ cat['title_' + $i18n.locale] }}</span>
        </div>
      </div>
    </div>
    <!-- Upcoming Events -->
    <div class="container pb-8 mt-20">
      <div class="px-6 md:px-12">
        <h2 class="mb-8">{{ $t('events.upcoming') }}</h2>
        <eventListUpcoming v-if="activeCat=='all'" category="all" :showTitle="false" />
        <template v-for="cat in eventCategories" >
          <eventListUpcoming v-if="activeCat==cat.name" :category="cat.name" :key="cat.id" :showTitle="false" />
        </template>
      </div>
    </div>
    <!-- Previous Events -->
    <div class="container pb-8 mt-20">
      <div class="px-6 md:px-12 ">
        <h2 class="mb-8">{{ $t('events.previous') }}</h2>
        <eventListPrevious v-if="activeCat=='all'" category="all" />
        <template v-for="cat in eventCategories">
          <eventListPrevious v-if="activeCat==cat.name" :category="cat.name" :key="cat.id" />
        </template>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import eventListUpcoming from "@/components/Events/EventList";
  import eventListPrevious from "@/components/Events/EventListPrevious";
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
        title: this.eventMeta['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.eventMeta['metaDescription_' + this.$i18n.locale] ? this.eventMeta[
              'metaDescription_' + this.$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    layout: "default",
    components: {
      eventListUpcoming,
      eventListPrevious,
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
