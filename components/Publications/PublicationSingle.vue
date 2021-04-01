<template>
  <section>
    <div class="container">
      <div class="p-12">
        <div class="text-josa-blue text-xl mb-2 uppercase">
          <span v-for="(topic, index) in publication.topics" :key="topic.id">
            {{ topic['title_' + $i18n.locale] }}{{ index != Object.keys(publication.topics).length - 1 ? ', ' : ''}}
          </span>
        </div>
        <h2>{{ publication['title_' + $i18n.locale] }}</h2>
        <h3 class="mt-2">{{ $t('meta.by') }} {{ publication['author_' + $i18n.locale]}}</h3>
        <div class="content flex flex-wrap md:flex-no-wrap mt-12">
          <div class="w-full md:w-3/5 md:ltr:mr-8 rtl:ml-8 mb-8">
            <div v-if="publication['description_' + $i18n.locale]" class="description pb-8"
              v-html="publication['description_' + $i18n.locale]"></div>
            <shareButtons/>
          </div>
          <div class="w-full md:w-2/5 mb-8">
            <publishDateCard class="mb-8" :date="publication.publishDate" />
            <downloadCard class="mb-8" :fileLink="publication.report.url" />
            <appImage v-if="publication.thumbnail" :image="publication.thumbnail" size="large" class="thumbnail" />
            <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
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
  import shareButtons from '~/components/ShareButtons/ShareButtons';
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
      downloadCard,
      shareButtons

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
    border: 1px solid #aaa;
  }

  .description>>>p,
  .description>>>h3 {
    @apply mb-4;
  }

</style>
