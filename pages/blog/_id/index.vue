<template>
  <BlogSingle :article="blog" />
</template>

<script>
  import axios from 'axios';
  import BlogSingle from '~/components/Blog/BlogSingle';
  export default {
    layout: "general",
    asyncData(context) {
      return axios.get(process.env.baseUrl + '/blogs/' + context.params.id)
        .then(res => {
          return {
            blog: res.data
          }
        })
        .catch(e => context.error(e))
    },
    components: {
      BlogSingle
    },
    head() {
      return {
        title: this.pageTitle,
        meta: [{
          hid: 'blog',
          name: 'Blog'
        }]
      }
    },
    computed: {
      pageTitle() {
        return this.blog.title
      }
    }
  };

</script>
