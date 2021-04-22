<template>
  <div>
  <article :dir="article.language == 'ar' ? 'rtl' : 'ltr'" :lang="article.language">
    <appImage v-if="article.thumbnail" :image="article.thumbnail" size="large" class="thumbnail" />
    <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
    <div ref="content" class="container content">
      <h2 ref="title">{{ article.title }}</h2>
        <div class="flex flex-row flex-wrap justify-between items-center my-2">
          <p class="text-josa-warm-grey-dark font-bold my-2">
            {{ article.publishDate ? article.publishDate: article.created_at | fullDate($i18n.locale) }}
          </p>
          <shareButtons v-if="url" :url="url" class="my-2" />
        </div>
      <p v-if="article.excerpt" class="excerpt" :class="article.language">{{ article.excerpt }}</p>
      <!-- author and Share -->
        <div v-if="article.authors.length" class="flex flex-wrap flex-row my-4" :dir="$dir()">
          <author v-for="author in article.authors" v-bind:key="author.id" class="mb-4 flex-shrink-0"
            :name="author['name_' + $i18n.locale]" :picture="author.picture" />
      </div>
      <!-- Body -->
      <div class="body" v-html="article.body"></div>
      <hr>
      <!-- author and Share -->
        <shareButtons v-if="url" class="mb-4 w-full justify-end" :url="url" />
    </div>
  </article>
    <div v-if="article.authors.length" class="py-0 authors"> 
      <h5 class="pb-2 rtl:pr-4 ltr:pl-4 written-by text-base"> {{$t('meta.writtenBy')}}</h5>
      <div class="flex flex-col">
        <author v-for="author in article.authors" v-bind:key="author.id" class="mb-4" :name="author['name_' + $i18n.locale]"
          :picture="author.picture" :bio="author['bio_' + $i18n.locale]" />
      </div>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import author from '~/components/Blog/Author';
  import shareButtons from '~/components/ShareButtons/ShareButtons';
  export default {
    name: 'BlogSingle',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg',
        url: null
      }
    },
    components: {
      appImage,
      author,
      shareButtons,
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.url = window.location.href;
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

  .content, .authors {
    @apply bg-white p-8 relative z-50 mx-auto;
    max-width: 766px;
  }

  .excerpt {
    opacity: 0.9;
    @apply font-bold mb-8;
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

  article[lang="ar"] .body>>>p {
    @apply text-2xl font-naskh;
  }

  .body>>>h3 {
    @apply text-2xl py-2 font-bold opacity-90;
  }

  hr {
    @apply mt-12 mb-4 border-solid border-josa-warm-grey-dark;
  }

  article[dir="ltr"]>>>.share-button {
    @apply ml-4 mr-0;
  }

  article[dir="rtl"]>>>.share-button {
    @apply mr-4 ml-0;
  }

  article>>>.share-button:first-child {
    @apply mx-0;
  }

  article[dir="ltr"]>>>.copy-tooltip-text {
    right: -75px;
    left: unset;
  }

  article[dir="rtl"]>>>.copy-tooltip-text {
    left: -75px;
    right: unset;
  }

  [dir="ltr"] .written-by {
    margin-left: 50px;
  }

  [dir="rtl"] .written-by {
    margin-right: 50px;
  }

  .authors {
    padding-top: 0;
    padding-bottom: 0;
  }

</style>