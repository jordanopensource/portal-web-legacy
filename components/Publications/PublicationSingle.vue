<template>
  <section>
    <div class="container">
      <div class="p-12">
        <div class="text-josa-blue text-xl mb-2 uppercase">
          <span v-for="(topic, index) in publication.topics" :key="topic.id">
            {{ topic.name }}{{ index != Object.keys(publication.topics).length - 1 ? ', ' : ''}}
          </span>
        </div>
        <h2>{{ publication.title }}</h2>
        <h3 class="mt-2">{{ $t('meta.by') }} {{ publication.author}}</h3>
        <div class="content flex flex-wrap md:flex-no-wrap mt-12">
          <div class="w-full md:w-3/5 md:mr-8 mb-8">
            <appImage v-if="publication.thumbnail" :image="publication.thumbnail" size="large" class="thumbnail" />
            <img v-else class="thumbnail md:mr-6 w-full" :src="placeholderImage" />
          </div>
          <div class="w-full md:w-2/5 mb-8">
            <publishDateCard class="mb-8" :date="publication.publishDate" />
            <downloadCard :fileLink="publication.report.url" />
            <div v-if="publication.description" class="description py-8" v-html="$md.render(publication.description)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import publishDateCard from '~/components/Publications/PublishDateCard';
  import downloadCard from '~/components/Publications/DownloadCard';

  export default {
    name: 'PublicationSingle',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage,
      publishDateCard,
      downloadCard

    },
    props: {
      publication: {
        type: Object,
        required: true
      }
    },
  }

</script>

<style scoped>
  section {
    @apply bg-white;
  }

  .thumbnail {
    @apply w-full;
  }

  .description>>>p,
  .description>>>h3 {
    @apply mb-4;
  }

</style>
