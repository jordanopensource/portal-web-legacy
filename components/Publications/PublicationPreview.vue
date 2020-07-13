<template>
  <div class="preview my-8 flex flex-wrap md:flex-no-wrap">

    <appImage v-if="publication.thumbnail" class="thumbnail" :image="publication.thumbnail" size="medium" />
    <img v-else class="thumbnail" :src="placeholderImage" />

    <div ref="content" class="flex-grow">

      <h3 class="uppercase py-2 md:pt-0 text-sm">
        <span v-for="(topic, index) in publication.topics" :key="topic.id">
          {{ topic.name }}{{ index != Object.keys(publication.topics).length - 1 ? ', ' : ''}}
        </span>
      </h3>

      <nuxt-link :to="publicationLink">
        <h2 class="mb-4 font-aleoLightItalic text-3xl">{{ publication.title }}</h2>
      </nuxt-link>

      <div class="publication-info flex flex-wrap md:flex-no-wrap">
        <span class="mr-12">{{ $t('meta.by') }} {{ publication.author}}</span>
        <span>
          <font-awesome-icon class="icon" :icon="['fas', 'clock']" />{{ $t('publication.publishDate') }}
          {{ publication.publishDate | fullDate }}</span>

      </div>

      <nuxt-link :to="publicationLink" class="block py-4 text-josa-blue font-bold text-sm hover:opacity-75">
        {{ $t('meta.readTheReport') }}
        <font-awesome-icon class="ml-2 align-middle" :icon="['fas', 'long-arrow-alt-right']" />
      </nuxt-link>

    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'PublicationPreview',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage
    },
    props: {
      publication: {
        type: Object,
        required: true
      }
    },
    computed: {
      publicationLink() {
        return '/publications/' + this.publication.id
      }
    }
  }

</script>

<style scoped>
  .preview .thumbnail {
    @apply w-1/2 object-cover mb-4;
  }

  p {
    @apply leading-golden;
  }

  .icon {
    @apply text-josa-warm-grey-dark mr-2;
  }

  @screen md {
    .preview .thumbnail {
      @apply pr-6 mb-0;
      min-width: 250px;
      flex-shrink: 0;
      width: 25%;
    }
  }

</style>
