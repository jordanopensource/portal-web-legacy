<template>
  <div class="blogs-page container">
    <div class="container flex justify-between flex-wrap content-center mb-4">
    <h2 class="title m-0">Blogs</h2>
    </div>
      <div>
        <BlogList :blogs="loadedBlogs" />
    </div>
  </div>
</template>

<script>
import BlogList from "@/components/Blogs/BlogList";
export default {
  layout: "general",
  components: {
    BlogList,
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
