<template>
  <div class="blog-page">
    <section class="update-form">
      <BlogForm :blog="blog" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
  import BlogForm from "@/components/Blogs/BlogForm";
  import axios from "axios";

  export default {
    layout: "general",
    components: {
      BlogForm
    },
    asyncData(context) {
      return axios.get(process.env.baseUrl + '/blogs/' + context.params.id)
        .then(res => {
          return {
            blog: res.data
          }
        })
        .catch(e => context.error(e))
    },
    methods: {
      onSubmitted(editedBlog) {
        this.$store.dispatch("editBlog", editedBlog).then(() => {
          this.$router.push("/blogs");
        });
      }
    }
  };

</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }

</style>
