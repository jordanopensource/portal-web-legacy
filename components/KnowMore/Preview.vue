<template>
  <div class="preview my-8 flex flex-wrap lg:flex-no-wrap">
    <appImage v-if="page.image" :image="page.image" size="medium" class="w-full mb-4 px-4 md:px-8 bot mx-auto flex-shrink-0" />
    <img v-else :src="placeholderImage" class="bot" />
    <div class="flex-grow mt-4">
      <nuxt-link :to="pageLink">
        <h3 class="mb-4">{{ page['title_' + $i18n.locale] ? page['title_' + $i18n.locale] : page['title_en'] }}</h3>
      </nuxt-link>
      <p v-if="page['description_' + $i18n.locale]">{{ page['description_' + $i18n.locale] }}</p>
      <nuxt-link :to="pageLink" class="py-4 display-more">
        {{ $t('meta.knowMore') }}
        <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    data() {
      return {
        placeholderImage: process.env.bucketUrl + '/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage
    },
    props: {
      page: {
        type: Object,
        required: true
      },
    },
    computed: {
      pageLink() {
        return this.localePath(this.page.url)
      },
      arrowIcon() {
        if (this.$i18n.locale == "ar") {
          return 'long-arrow-alt-left'
        } else {
          return 'long-arrow-alt-right'
        }
      }
    }
  }

</script>

<style scoped>
  .bot {
    width: 250px;
  }

</style>
