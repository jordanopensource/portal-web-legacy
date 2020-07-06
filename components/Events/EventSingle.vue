<template>
  <article>
    <div class="container">
      <div class="p-12">
        <div class="text-josa-blue font-bold mb-2">{{ article.startDate | dayDate }} </div>
        <h2>{{ article.name }}</h2>
        <div class="content flex flex-wrap md:flex-no-wrap mt-12">
          <div class="w-full md:w-3/5 mr-8 mb-8">
            <appImage v-if="article.thumbnail" :image="article.thumbnail" size="large" class="thumbnail" />
            <img v-else class="thumbnail md:mr-6 w-full" :src="placeholderImage" />
            <div class=" description py-8" v-html="$md.render(article.description)"></div>
            <speakers :speakers="article.speakers" />
          </div>
          <div class="w-full md:w-2/5 mb-8">
            <timeCard class="mb-8" :from="article.startDate" :to="article.endDate" />
            <locationCard :location="article.location" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  import timeCard from '~/components/Events/TimeCard.vue';
  import speakers from '~/components/Events/Speakers.vue';
  import locationCard from '~/components/Events/LocationCard.vue';

  export default {
    name: 'EventSingle',
    data() {
      return {
        placeholderImage: process.env.baseUrl + '/uploads/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage,
      timeCard,
      speakers,
      locationCard
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
  }

</script>

<style scoped>

  article {
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
