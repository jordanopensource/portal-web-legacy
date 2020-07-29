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
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageTitle,
        meta: [{
            hid: 'blog',
            name: 'Blog'
          },
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageTitle() {
        return this.blog.title
      }
    }
  };

</script>
