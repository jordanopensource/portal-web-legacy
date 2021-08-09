<template>
  <div class="preview my-8 flex flex-wrap lg:flex-no-wrap">
    <nuxt-link tag="a" :to="careerLink" class="thumbnail">
      <appImage v-if="career.thumbnail" :image="career.thumbnail" size="medium" />
      <img v-else :src="placeholderImage" />
    </nuxt-link>
    <div ref="content" class="flex-grow">
      <p v-if="career.status == false" class="closed">{{ $t('meta.closed') }}</p>
      <nuxt-link :to="careerLink">
        <h3>{{ career['title_' + $i18n.locale] ? career['title_' + $i18n.locale] : career['title_en'] }}</h3>
      </nuxt-link>

      <div class="career-info flex flex-wrap lg:flex-no-wrap">
        <span class="ltr:mr-4 rtl:ml-4">
          <font-awesome-icon class="icon" :icon="['fas', 'clock']" />
          {{ career['period_' + $i18n.locale] }}
        </span>

        <span>
          <font-awesome-icon class="icon" :icon="['fas', 'map-marker-alt']" />
          {{ career['location_' + $i18n.locale] }}
        </span>
      </div>

      <nuxt-link :to="careerLink" class="py-4 display-more">
        {{ $t('meta.knowMore') }}
        <font-awesome-icon class="ltr:ml-2 rtl:mr-2 align-middle" :icon="['fas', arrowIcon ]" />
      </nuxt-link>

    </div>
  </div>
</template>

<script>
  import appImage from '~/components/UI/appImage';
  export default {
    name: 'CareerPreview',
    data() {
      return {
        placeholderImage: process.env.bucketUrl + '/josabots_88f0a93786.jpeg'
      }
    },
    components: {
      appImage
    },
    props: {
      career: {
        type: Object,
        required: true
      }
    },
    computed: {
      careerLink() {
        var title = ''
        if (this.career['title_' + this.$i18n.locale]) {
          title = this.career['title_' + this.$i18n.locale]
        } else {
          title = this.career.title_en
        }
        const slug = this.$options.filters.stringToSlug(title)
        return this.localePath('/careers/' + this.career.id + '/' + slug)
      },
      arrowIcon() {
        if (this.$i18n.locale == "ar") {
          return 'long-arrow-alt-left'
        } else {
          return 'long-arrow-alt-right'
        }
      }
    }
  }
</script>

<style scoped>
  p {
    @apply leading-golden;
  }

  .icon {
    @apply text-josa-warm-grey-dark;
  }
</style>