<template>
  <div class="blog-page">
    <div class="container">
      <pageBanner :pageMeta="blogMeta" />
    </div>

    <div class="bg-josa-black py-8">
      <div class="container">
        <div class="px-12 flex flex-col sm:flex-row">
          <span :class="activeCat == 'all' ? 'active': ''" class="cat-link" @click="setActiveCat('all')">All
            Posts</span>
          <span :class="activeCat == cat.name ? 'active': ''" class="cat-link" v-for="cat in blogCategories"
            :key="cat.id" @click="setActiveCat(cat.name)">{{ $t('blogCats.menu.' + cat.name) }}</span>
        </div>
      </div>
    </div>

    <div class="container">
      <blogList v-if="activeCat=='all'" class="blog-list" title="featured" category="all" featured />
      <div v-for="cat in blogCategories" :key="cat.id">
        <blogList v-if="activeCat=='all' || activeCat==cat.name" class="blog-list" :numberOfArticles="numArticles"
          :category="cat.name" :title="$t('blogCats.title.' + cat.name)" />
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import blogList from "@/components/Blogs/BlogList";
  import appButton from '@/components/form-components/AppButton';
  import pageBanner from "@/components/UI/PageBanner";

  export default {
    data() {
      return {
        title: "Blog",
        activeCat: 'all'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [{
          hid: 'blog',
          name: 'blog'
        }]
      }
    },
    layout: "general",
    components: {
      blogList,
      appButton,
      pageBanner
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?title=blog');
      const cats = await axios.get(process.env.baseUrl + '/blog-categories');
      return {
        blogMeta: pageMeta.data[0],
        blogCategories: cats.data
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
  .blog-page {
    @apply mb-20
  }

  .blog-list {
    @apply px-12 mt-20;
  }

  .cat-link {
    @apply px-4 py-2 mr-2 my-1 text-xs text-white cursor-pointer;
  }

  .active,
  .cat-link:hover {
    @apply rounded-lg;
    background-color: rgba(229, 229, 229, 0.2);
  }

</style>
