<template>
  <div class="new-blog-page">
    <section class="new-blog-form">
      <BlogForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import BlogForm from "@/components/Blogs/BlogForm";

  export default {
    layout: "general",
    components: {
      BlogForm
    },
    methods: {
      onSubmitted(blogData) {
        this.$store.dispatch("addBlog", blogData).then(() => {
          this.$router.push("/blogs");
        });
      }
    }
  };

</script>

<style scoped>
  .new-blog-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-blog-form {
      width: 500px;
    }
  }

</style>
