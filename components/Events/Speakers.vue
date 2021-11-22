<template>
  <div>
    <h3>{{ $t("speakers") }}</h3>
    <div class="info" v-for="speaker in speakers" :key="speaker.id">
      <appImage
        class="profilePicture w-12 h-12 flex-shrink-0"
        :image="speaker.picture"
      />
      <div>
        <h4 class="font-medium">{{ speaker["fullName_" + $i18n.locale] }}</h4>
        <p>{{ speaker["title_" + $i18n.locale] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import appImage from "~/components/UI/appImage";
export default {
  name: "Speakers",
  props: {
    speakers: {
      type: Array,
      required: true,
    },
  },
  components: {
    appImage,
  },
};
</script>

<style lang="postcss" scoped>
.info {
  @apply flex flex-nowrap mt-4;
}
</style>
