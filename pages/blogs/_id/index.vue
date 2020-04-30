<template>
  <div class="container">
      <h2 class="blog-name inline-block pr-2">{{ blog.title }}</h2>
      <div class="blog-details">
        <div>Published at: {{ blog.created_at | dateTime }}</div>
        <div v-html="$md.render(blog.body)"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  layout: "general",
    asyncData(context) {
    return axios.get(process.env.baseUrl + '/blogs/' + context.params.id)
      .then(res => {
        return {
          blog: res.data
        }
      })
      .catch(e => context.error(e))
  }
};
</script>


<style scoped>

</style>
