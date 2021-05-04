<template>
  <div>
    <!-- Banner -->
    <div id="banner" :style="{backgroundImage: `url(${backgroundUrl})`}">
      <div class="overlay"></div>
      <div class="container">
        <div class="px-12">
          <div class="my-auto w-full lg:max-w-1/2">
            <h5 class="mb-2">{{$t('dossier.dossier')}}</h5>
            <h4 class="mb-4">{{ dossier['title_' + $i18n.locale] }}</h4>
            <p v-if="dossier['tagline_' + $i18n.locale]" class="ltr:leading-normal rtl:leading-relaxed">
              {{ dossier['tagline_' + $i18n.locale] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-20">
      <div class="px-12">
        <div class="flex flex-wrap lg:flex-no-wrap">
          <!-- Description -->
          <div class="w-full lg:w-3/5 ltr:mr-8 rtl:ml-8 mb-8">
            <!-- share buttons  -->
            <shareButtons v-if="url" class="mb-4 w-full justify-end" :url="url" />
            <div v-if="dossier['description_' + $i18n.locale]" v-html="dossier['description_' + $i18n.locale]"></div>
          </div>
          <!-- Content List -->
          <div class="w-full lg:w-2/5 mb-8">
            <div class="bg-josa-warm-grey-light p-8">
              <p class="font-bold uppercase mb-8">{{$t('dossier.inDossier')}}</p>
              <div v-if="dossier['content_' + $i18n.locale]" v-html="dossier['content_' + $i18n.locale]"></div>
            </div>
          </div>
        </div>
        <!-- Articles -->
        <section v-if="ifArticles" class="mt-20">
          <articlePreviewAlt class="my-16" v-for="article in orderBy(articlesByLanguage, 'publishDate', -1)"
            :key="article.id" :article="article" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import articlePreviewAlt from '~/components/Blog/ArticlePreviewAlt';
  import shareButtons from '~/components/ShareButtons/ShareButtons';
  import Vue2Filters from 'vue2-filters';
  export default {
    layout: "default",
    mixins: [Vue2Filters.mixin],
    components: {
      articlePreviewAlt,
      shareButtons
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.dossier['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' :
          'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.dossier['tagline_' + this.$i18n.locale] ? this.dossier['tagline_' + this
              .$i18n.locale] : ''
          },
          ...this.$options.filters.ogTags('dossier', this.dossier, this.$route.path, this.$i18n.locale),
          ...i18nSeo.meta
        ]
      }
    },
    asyncData({
      params,
      error
    }) {
      return axios
        .get(process.env.baseUrl + '/dossiers?pageId=' + params.slug)
        .then(res => {
          if (res.data[0].id) {
            return {
              dossier: res.data[0]
            }
          } else {
            return error({
              statusCode: 404,
              message: 'This page could not be found'
            })
          }
        })
        .catch(e => {
          error({
            statusCode: 404,
            message: 'This page could not be found'
          })
        })
    },
    data() {
      return {
        url: null
      }
    },
    computed: {
      backgroundUrl() {
        return process.env.baseUrl + this.dossier.thumbnail.url
      },
      articlesByLanguage() {
        let articlesByLanguage = this.dossier.blogs.filter(article => article.language == this.$i18n.locale)
        return articlesByLanguage
      }
    },
    methods: {
      ifArticles() {
        if (Array.isArray(this.dossier.blogs) && this.dossier.blogs.length)
          return true;
        else
          return false;
      }
    },
    mounted() {
      this.url = window.location.href;
    }
  }
</script>

<style scoped>
  #banner {
    @apply relative py-24 bg-no-repeat bg-center bg-cover z-0;
  }

  #banner .overlay {
    @apply absolute top-0 left-0 right-0 w-full h-full block bg-josa-black opacity-50 z-10;
  }

  [dir="ltr"] #banner .overlay {
    background: linear-gradient(345deg, rgba(56, 151, 192, 1) 0%, rgba(46, 52, 54, 1) 65%);
  }

  [dir="rtl"] #banner .overlay {
    background: linear-gradient(15deg, rgba(56, 151, 192, 1) 0%, rgba(46, 52, 54, 1) 65%);
  }

  #banner .container {
    @apply relative z-20;
  }

  #banner * {
    @apply text-white;
  }
</style>