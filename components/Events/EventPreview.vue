<template>
  <div class="preview my-8 flex flex-wrap lg:flex-nowrap">
    <nuxt-link tag="a" :to="eventLink" class="thumbnail">
      <appImage v-if="event.thumbnail" :image="event.thumbnail" size="medium" />
      <img v-else :src="placeholderImage" />
    </nuxt-link>
    <div ref="content" class="flex-grow">
      <h5 class="text-josa-blue mb-2 uppercase">
        {{ event.startDate | dayDate($i18n.locale) }}
      </h5>
      <nuxt-link :to="eventLink">
        <h3 class="mb-4">
          {{
            event["title_" + $i18n.locale]
              ? event["title_" + $i18n.locale]
              : event["title_en"]
          }}
        </h3>
      </nuxt-link>
      <div class="event-info flex flex-wrap lg:flex-nowrap">
        <p class="ltr:mr-4 rtl:ml-4">
          <font-awesome-icon
            class="icon rtl:ml-2 ltr:mr-2"
            :icon="['fas', 'clock']"
          />
          {{ event.startDate | time($i18n.locale) }} -
          {{ event.endDate | time($i18n.locale) }} ({{ $t("timeCard.gmt")
          }}{{ to | timezone($i18n.locale) }})
        </p>
        <p v-if="event.address">
          <font-awesome-icon
            class="icon rtl:ml-2 ltr:mr-2"
            :icon="['fas', 'map-marker-alt']"
          />
          {{ event.address["addressOne_" + $i18n.locale] }}
        </p>
      </div>
      <nuxt-link :to="eventLink" class="py-4 display-more">
        {{ $t("meta.knowMore") }}
        <font-awesome-icon
          class="ltr:ml-2 rtl:mr-2 align-middle"
          :icon="['fas', arrowIcon]"
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import appImage from "~/components/UI/appImage";
export default {
  name: "EventPreview",
  data() {
    return {
      placeholderImage: process.env.bucketUrl + "/josabots_88f0a93786.jpeg",
    };
  },
  components: {
    appImage,
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    eventLink() {
      var title = "";
      if (this.event["title_" + this.$i18n.locale]) {
        title = this.event["title_" + this.$i18n.locale];
      } else {
        title = this.event.title_en;
      }
      const slug = this.$options.filters.stringToSlug(title);
      return this.localePath("/events/" + this.event.id + "/" + slug);
    },
    arrowIcon() {
      if (this.$i18n.locale == "ar") {
        return "long-arrow-alt-left";
      } else {
        return "long-arrow-alt-right";
      }
    },
  },
};
</script>

<style scoped>
.icon {
  @apply text-josa-warm-grey-dark;
}
</style>
