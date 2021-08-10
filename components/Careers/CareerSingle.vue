<template>
  <section>
    <div class="container">
      <div class="py-12 px-6 md:px-12">
        <h4 class="text-josa-blue mb-2">{{ career.careerType['title_' + $i18n.locale] }}</h4>
        <div>
          <h2>{{ career['title_' + $i18n.locale] }}</h2>
          <p v-if="career.status == false" class="closed">{{ $t('meta.closed') }}</p>
        </div>
        <div class="content flex flex-wrap md:flex-no-wrap mt-12">
          <div class="w-full md:w-3/5 ltr:mr-8 rtl:ml-8 mb-8">
            <appImage v-if="career.thumbnail" :image="career.thumbnail" size="large" class="thumbnail" />
            <img v-else class="thumbnail md:ltr:mr-6 md:rtl:ml-6 w-full" :src="placeholderImage" />
            <div v-if="career['description_' + $i18n.locale]" class="description py-8"
              v-html="career['description_' + $i18n.locale]"></div>
          </div>
          <div class="w-full md:w-2/5 mb-8">
            <infoCard class="mb-8" :career="career" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import infoCard from '~/components/Careers/InfoCard';

  export default {
    name: 'CareerSingle',
    data() {
      return {
        placeholderImage: process.env.bucketUrl + '/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage,
      infoCard
    },
    props: {
      career: {
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
