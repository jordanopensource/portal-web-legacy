<template>
  <div class="preview my-8 flex flex-wrap lg:flex-no-wrap">
    <appImage v-if="partner.logo" :image="partner.logo" size="medium" class="thumbnail" />
    <img v-else :src="placeholderImage" class="thumbnail" />
    <div class="flex-grow">
      <h2 class="mb-4 text-3xl">{{ partner['title_' + $i18n.locale] }}</h2>
      <p v-if="partner['description_' + $i18n.locale]">{{ partner['description_' + $i18n.locale] }}</p>
      <p v-else>{{ partner['description_' + $i18n.locale] }}</p>
      <a :href="partner.websiteUrl" target="_blank"
        class="block py-4 text-josa-blue font-bold ltr:text-sm rtl:text-base hover:opacity-75">
        {{ $t('meta.visitWebsite') }}
        <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
      </a>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'PartnerPreview',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage
    },
    props: {
      partner: {
        type: Object,
        required: true
      }
    },
    computed: {
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
  [lang="en"] p {
    @apply leading-golden;
  }

  [lang="ar"] p {
    @apply leading-normal;
  }
  .preview .thumbnail{
    @apply object-contain bg-josa-warm-grey-light;
  }
  [dir="ltr"] .preview .thumbnail {
    @apply pr-0 mr-6;
  }

  [dir="rtl"] .preview .thumbnail {
    @apply pl-0 ml-6;
  }
</style>
