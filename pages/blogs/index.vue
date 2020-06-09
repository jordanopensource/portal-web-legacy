<template>
  <div class="blog-page container">
    <blogList class="blog-list" :title="$t('blog.lists.latest')" :numberOfArticles="2" category="press_releases" />
    <blogList class="blog-list" :title="$t('blog.lists.community')" :numberOfArticles="2" category="community" />
  </div>
</template>

<script>
  import blogList from "@/components/Blogs/BlogList";
  import appButton from '@/components/form-components/AppButton';
  export default {
    layout: "general",
    components: {
      blogList,
      appButton
    }
  };

</script>

<style scoped>
  .blog-list {
    @apply px-12 mb-20;
  }

</style>
