<template>
  <div class="blogs-page container">
    <div class="container flex justify-between flex-wrap content-center mb-4">
      <h2 class="title m-0">Blogs</h2>
      <AppButton btn-style="button-blue-full" @click="$router.push('/blogs/create')">Create Blog</AppButton>
    </div>
    <div>
      <BlogList :blogs="loadedBlogs" />
    </div>
  </div>
</template>

<script>
  import BlogList from "@/components/Blogs/BlogList";
  import AppButton from '@/components/form-components/AppButton';
  export default {
    layout: "general",
    components: {
      BlogList,
      AppButton
    },
    computed: {
      loadedBlogs() {
        return this.$store.getters.loadedBlogs
      }
    },
    created() {
      this.$store.dispatch('fetchBlogs')
    },
  };

</script>


<style scoped>
</style>
