<template>
  <div class="event-page">

    <!-- Banner -->
    <pageBanner :pageMeta="eventMeta" />

    <!-- Menu -->
    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link"
            @click="setActiveCat('all')">{{ $t('eventCats.menu.all') }}</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in eventCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ $t('eventCats.menu.' + cat.name) }}</span>
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
  import appButton from '@/components/form-components/AppButton';
  import pageBanner from "@/components/UI/PageBanner";

  export default {
    data() {
      return {
        title: "Events",
        activeCat: 'all'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [{
          hid: 'events',
          name: 'events'
        }]
      }
    },
    layout: "general",
    components: {
      eventList,
      appButton,
      pageBanner
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?title=event');
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

  .cat-link {
    @apply px-4 py-2 mr-2 my-1 text-white cursor-pointer;
  }

  .active,
  .cat-link:hover {
    @apply rounded-lg;
    background-color: rgba(229, 229, 229, 0.2);
  }

</style>
