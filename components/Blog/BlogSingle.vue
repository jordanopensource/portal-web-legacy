<template>
  <article>
    <!-- Image -->
    <appImage v-if="article.thumbnail" :image="article.thumbnail" size="large" class="thumbnail" />
    <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
    <div ref="content" class="container content">
      <!-- title -->
      <h2 ref="title" :dir="article.language == 'ar' ? 'rtl' : 'ltr'" :lang="article.language">{{ article.title }}</h2>
      <!-- Publish date and share buttons -->
      <div class="flex flex-row flex-wrap justify-between items-center my-6">
        <p class="text-josa-warm-grey-dark font-bold my-2">
          {{ article.publishDate ? article.publishDate: article.created_at | fullDate($i18n.locale) }}
        </p>
        <shareButtons v-if="url" :url="url" class="my-2" />
      </div>
      <!-- Translation -->
      <div class="mb-4">
        <nuxt-link v-for="translation in article.translations" v-bind:key="translation.id"
          :to="translationLink(translation)">
          {{$t('blog.readTranslated', translation.language)}}
        </nuxt-link>
      </div>
      <p v-if="article.excerpt" class="excerpt" :class="article.language"
        :dir="article.language == 'ar' ? 'rtl' : 'ltr'" :lang="article.language">{{ article.excerpt }}</p>
      <!-- authors and translators -->
      <div v-if="article.authors.length || article.translators.length" class="flex flex-wrap flex-row my-8">
        <template v-if="article.authors.length">
          <author v-for="author in article.authors" :key="author.id" class="mb-4 ltr:mr-8 rtl:ml-8 flex-shrink-0"
            :name="author['name_' + $i18n.locale]" :picture="author.picture" />
        </template>
        <template v-if="article.translators.length">
          <author v-for="translator in article.translators" :key="translator.id"
            class="mb-4 ltr:mr-8 rtl:ml-8 flex-shrink-0" :name="translator['name_' + $i18n.locale]"
            :picture="translator.picture" :translatedBy="true" v-bind:writtenBy="false" />
        </template>
      </div>
      <!-- Article body -->
      <div class="article-body" :dir="article.language == 'ar' ? 'rtl' : 'ltr'" :lang="article.language"
        v-html="article.body"></div>
      <hr class="mt-12 mb-6 border-solid border-josa-warm-grey-dark">
      <!-- share buttons  -->
      <shareButtons v-if="url" class="mb-4 w-full justify-end" :url="url" />
      <!-- authors and translators -->
      <div v-if="article.authors.length || article.translators.length" class="my-8">
        <template v-if="article.authors.length">
          <h5 class="pb-2 rtl:pr-4 ltr:pl-4 written-by text-base"> {{$t('meta.writtenBy')}}</h5>
          <author v-for="author in article.authors" v-bind:key="author.id" class="mb-4 bio"
            :name="author['name_' + $i18n.locale]" :picture="author.picture" :bio="author['bio_' + $i18n.locale]"
            v-bind:writtenBy="false" />
        </template>
        <template v-if="article.translators.length">
          <h5 class="pb-2 rtl:pr-4 ltr:pl-4 written-by text-base"> {{$t('meta.translatedBy')}}</h5>
          <author v-for="translator in article.translators" v-bind:key="translator.id" class="mb-4"
            :name="translator['name_' + $i18n.locale]" :picture="translator.picture"
            :bio="translator['bio_' + $i18n.locale]" v-bind:writtenBy="false" />
        </template>
      </div>
    </div>
  </article>
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
      },
      translationLink(translation) {
        const slug = this.$options.filters.stringToSlug(translation.title)
        return this.localePath('/blog/' + translation.id + '/' + slug)
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

  article h2[lang="en"] {
    @apply font-aleoLight leading-tight font-light;
  }

  article h2[lang="ar"] {
    @apply font-almarai leading-snug font-light;
  }

  .content {
    @apply bg-white p-8 relative z-50 mx-auto;
    max-width: 766px;
  }

  .excerpt {
    opacity: 0.9;
    @apply font-bold mb-8;
  }

  /* article-body */
  .article-body>>>p {
    @apply font-normal mb-4;
  }

  .article-body>>>a {
    text-decoration: underline;
  }

  article .article-body[lang="en"] /deep/ {
    @apply text-lg font-merriweather leading-relaxed;
  }

  article .article-body[lang="ar"] /deep/ {
    @apply text-2xl font-naskh leading-relaxed;
  }

  .article-body>>>h3 {
    @apply text-2xl py-2 font-bold opacity-90;
  }

  /* article-body */

  /* share buttons */
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

  /* share buttons */

  /* Authors */
  [dir="ltr"] .written-by {
    margin-left: 50px;
  }

  [dir="rtl"] .written-by {
    margin-right: 50px;
  }

  /* Authors */
</style>