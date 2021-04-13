<template>
  <article :dir="article.language == 'ar' ? 'rtl' : 'ltr'" :lang="article.language">
    <appImage v-if="article.thumbnail" :image="article.thumbnail" size="large" class="thumbnail" />
    <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
    <div ref="content" class="container content">
      <h2 ref="title">{{ article.title }}</h2>
      <div class="text-josa-warm-grey-dark font-bold my-4">
        {{ article.publishDate ? article.publishDate: article.created_at | fullDate($i18n.locale) }}</div>
      <p v-if="article.excerpt" class="excerpt" :class="article.language">{{ article.excerpt }}</p>
      <!-- author -->
      <author v-if="article.author" class="meta" :name="article.author['name_' + $i18n.locale]"
        :picture="article.author.picture" />
      <!-- Body -->
      <div class="body" v-html="article.body"></div>
      <hr>
      <!-- author -->
      <author v-if="article.author" class="meta" :name="article.author['name_' + $i18n.locale]"
        :picture="article.author.picture" :bio="article.author['bio_' + $i18n.locale]" />
    </div>
  </article>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import author from '~/components/Blog/Author';
  export default {
    name: 'BlogSingle',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage,
      author
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    mounted() {
      var w = window.innerWidth;
      if (w > 640) {
        this.setContentNegMargin();
      }
    },
    methods: {
      setContentNegMargin() {
        let rem = this.getRem();
        let element = this.$refs.title;
        let height = element.offsetHeight;
        let value = (parseInt(height) / rem) + 3;
        let content = this.$refs.content;
        content.style.marginTop = "-" + value + "rem";
      },
      getRem() {
        var html = document.getElementsByTagName('html')[0];
        return parseInt(window.getComputedStyle(html)['fontSize']);
      }
    }
  }
</script>

<style scoped>
  article {
    @apply bg-white;
  }

  .thumbnail {
    @apply w-full;
    max-height: 50vh;
    object-fit: cover;
  }


  article[lang="en"] h2 {
    @apply font-aleoLight leading-tight;
  }


  article[lang="ar"] h2 {
    @apply font-almarai leading-snug;
  }

  .content {
    @apply bg-white p-8 relative z-50 mx-auto;
    max-width: 766px;
  }

  .excerpt {
    opacity: 0.9;
    @apply font-bold mb-8;
  }

  .meta {
    @apply flex items-center mb-12;
  }

  [lang="en"] .meta {
    @apply text-sm;
  }

  [lang="ar"] .meta {
    @apply text-base;
  }

  .body>>>p {
    @apply font-normal mb-10;
    line-height: 1.7;
  }

  .body>>>p a {
    @apply text-josa-black;
    text-decoration: underline;
  }

  article[lang="en"] .body>>>p {
    @apply text-lg font-merriweather;
  }

  article[lang="en"] .body>>>p strong {
    @apply text-lg font-lato;
  }

  article[lang="ar"] .body>>>p {
    @apply text-2xl font-naskh;
  }

  .body>>>h3 {
    @apply text-2xl py-2 font-bold opacity-90;
  }

  hr {
    @apply my-12 border-solid border-josa-warm-grey-dark
  }
</style>
