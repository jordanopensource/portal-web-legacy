<template>
  <BlogSingle :article="blog" />
</template>

<script>
  import axios from 'axios';
  import BlogSingle from '~/components/Blog/BlogSingle';
  export default {
    layout: "default",
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
            name: 'Blog',
          },
          ...this.$options.filters.ogTags('article', this.blog, this.$route.path, this.$i18n.locale),
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageTitle() {
        return this.blog.title
      }
    },
  };

</script>
