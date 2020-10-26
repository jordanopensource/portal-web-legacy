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
        title: this.pageTitle + ' - ' + (this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح' :
          'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.blog.excerpt ? this.blog.excerpt : ''
          },
          {
            name: 'keywords',
            content: this.blog.tags ? this.blog.tags : ''
          },
          ...this.$options.filters.ogTags('article', this.blog, this.$route.path, this.$i18n.locale),
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageTitle() {
        return this.blog.title
      },
    },
  };
</script>