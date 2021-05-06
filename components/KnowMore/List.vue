<template>
  <div class="bg-josa-warm-grey-light">
    <div class="container">
      <div class="px-6 md:px-12 p-20 flex flex-wrap md:flex-no-wrap justify-between">
        <div class="w-full sm:ltr:pr-12 md:ltr:pr-20 lg:ltr:pr-32 sm:rtl:pl-12 md:rtl:pl-20 lg:rtl:pl-32">
          <h4 class="pb-2">{{ $t('meta.knowMoreAboutUs') }}</h4>
        </div>
        <div>
          <preview v-for="page in loadedPages" :key="page.id" :id="page.id" :page="page" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import preview from '~/components/KnowMore/Preview';
  export default {
    name: 'KnowMore',
    data() {
      return {
        loadedPages: [],
      }
    },
    components: {
      preview
    },
    created() {
      this.fetchPages()
    },
    methods: {
      async fetchPages() {
        const pageArray1 = await axios.get(process.env.baseUrl + '/page-metas?pageId=boardandstaff&pageId=partners');
        const pageArray2 = await axios.get(process.env.baseUrl + '/info-pages?pageId=code-of-conduct');
        const pagesArray = []
        for (const key in pageArray1.data) {
          pagesArray.push({
            ...pageArray1.data[key]
          })
        }
        pagesArray.push({
          ...pageArray2.data[0]
        })
        this.loadedPages = pagesArray
      }
    }
  }

</script>
