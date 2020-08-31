<template>
  <div v-if="info['content_' + $i18n.locale]">
    <div class="px-12"
      :class="alt ? 'text-center' : 'flex flex-row justify-between align-middle flex-wrap md:flex-no-wrap'">
      <appImage v-if="info.image" :image="info.image"
        :class="alt ? 'object-contain mx-auto mb-4' : 'object-contain md:ltr:pr-8 md:rtl:pl-8 mb-4 md:mb-0'" />
      <div :class="alt ? 'mx-auto w-full' : 'my-auto w-full md:w-1/2'">
        <h3 class="mb-4">{{ info['title_' + $i18n.locale] }}</h3>
        <p>{{ info['content_' + $i18n.locale] }}</p>
      </div>
    </div>
    <div class="block py-8 my-4 border-josa-warm-grey-dark">
      <hr>
    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    props: {
      info: {
        type: Object,
        required: true
      },
      alt: {
        type: Boolean,
        default: false
      }
    },
    components: {
      appImage
    }
  }

</script>
