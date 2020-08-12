<template>
  <div id="members-page" class="bg-josa-warm-grey-light">
    <div class="container">
      <div class="mb-12 px-12">
          <div class="p-12 row">
            <div>
              <h2 class="title m-0">{{ membersMeta['title_' + $i18n.locale] }}</h2>
              <p class="display-lead py-8">{{ membersMeta['description_' + $i18n.locale] }}</p>
            </div>
            <MemberList />
          </div>

      </div>
    </div>
  </div>
</template>

<script>
  import MemberList from "@/components/Members/MemberList";
  import axios from 'axios';
  export default {
    layout: "general",
    components: {
      MemberList,
    },
    async asyncData(context) {
      const pageMeta = await axios.get(process.env.baseUrl + '/page-metas?pageId=members');
      return {
        membersMeta: pageMeta.data[0]
      }
    }
  };

</script>


<style scoped>
</style>
