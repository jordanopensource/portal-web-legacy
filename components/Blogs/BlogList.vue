<template>
  <section class="grid gap-4 grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <BlogPreview
      v-for="blog in blogs"
      :key="blog.id"
      :id="blog.id"
      :title="blog.title"
      :created_at="blog.created_at"
      :excerpt="blog.excerpt" />
  </section>
</template>

<script>
import BlogPreview from '@/components/Blogs/BlogPreview'

export default {
  components: {
    BlogPreview
  },
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

