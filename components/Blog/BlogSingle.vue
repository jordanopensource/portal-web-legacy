<template>
  <article>
    <appImage v-if="article.thumbnail" :image="article.thumbnail" size="large" class="thumbnail" />
    <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />

    <div ref="content" class="container content">
      <h2 ref="title">{{ article.title }}</h2>

      <p class="josa-who">{{ $t('josa.who') }}</p>

      <div class="meta">
        <nuxt-link :to="authorProfile">
          <appImage :image="article.author.profilePicture" size="small" class="profilePicture" />
        </nuxt-link>
        <div>
          <nuxt-link :to="authorProfile">
            <p class="font-bold">{{ article.author.fullName }}</p>
          </nuxt-link>
          <div class="text-josa-warm-grey-dark">{{ article.created_at | fullDate($i18n.locale) }}</div>
        </div>
      </div>

      <div class="body" v-html="$md.render(article.body)"></div>

      <hr>

      <div class="meta">
        <nuxt-link :to="authorProfile">
          <appImage :image="article.author.profilePicture" size="small" class="profilePicture" />
        </nuxt-link>
        <div class="opacity-90">
          <p class="text-xs uppercase">{{ $t('meta.writtenBy')}}</p>
          <nuxt-link :to="authorProfile">
            <h3 class="font-bold">{{ article.author.fullName }}</h3>
          </nuxt-link>
        </div>
      </div>

    </div>
  </article>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'BlogSingle',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage
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
    computed: {
      authorProfile() {
        return this.localePath('/members/' + this.article.author.id)
      },
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
  }

  .content {
    @apply bg-white p-12 relative z-50 mx-auto;
    max-width: 766px;
  }

  .josa-who {
    opacity: 0.9;
    @apply font-bold my-8;
  }

  .meta {
    @apply flex items-center mb-12 text-sm;
  }

  .body>>>p {
    @apply text-lg font-normal mb-10;
    line-height: 2;
  }

  [lang="en"] .body>>>p {
    @apply font-merriweather;
  }

  [lang="ar"] .body>>>p {
    @apply font-markazi;
  }

  .body>>>h3 {
    @apply text-2xl py-2 font-bold opacity-90;
  }

  hr {
    @apply my-12 border-solid border-josa-warm-grey-dark
  }

</style>
