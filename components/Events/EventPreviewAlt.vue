<template>
  <div>
    <div class="mb-2">
      <h5 class="py-2 text-josa-black inline">{{ event.category['title_' + $i18n.locale] }}</h5>
      <span class="leading-none"> | </span>
      <h5 class="py-2 text-josa-blue inline">{{ event.startDate | fullDate($i18n.locale) }}</h5>
    </div>
    <nuxt-link :to="eventLink">
      <h3>{{ event['title_' + $i18n.locale] ? event['title_' + $i18n.locale] : event['title_en'] }}</h3>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'EventPreviewAlt',
    props: {
      event: {
        type: Object,
        required: true
      }
    },
    computed: {
      eventLink() {
        var title = ''
        if (this.event['title_' + this.$i18n.locale]) {
          title = this.event['title_' + this.$i18n.locale]
        } else {
          title = this.event.title_en
        }
        const slug = this.$options.filters.stringToSlug(title)
        return this.localePath('/events/' + this.event.id + '/' + slug)
      }
    }
  }
</script>

<style scoped>
</style>