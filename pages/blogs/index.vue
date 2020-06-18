<template>
  <div class="blog-page container">
    <pageBanner :pageMeta="blogMeta" />
    <blogList class="blog-list" title="featured" category="all" featured />
    <blogList class="blog-list" :title="$t('blog.lists.latest')" :numberOfArticles="2" category="press_releases" />
    <blogList class="blog-list" :title="$t('blog.lists.community')" :numberOfArticles="2" category="community" />
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
        title: "Blog"
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
    asyncData(context) {
      return axios.get(process.env.baseUrl + '/page-metas?title=blog')
        .then(res => {
          return {
            blogMeta: res.data[0]
          }
        })
        .catch(e => context.error(e))
    },
  };

</script>

<style scoped>
  .blog-list {
    @apply px-12 mb-20;
  }

</style>
