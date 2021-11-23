<template>
  <div class="flex flex-nowrap items-center">
    <appImage
      v-if="picture"
      :image="picture"
      size="small"
      class="profilePicture"
    />
    <img
      v-else
      size="small"
      class="profilePicture"
      src="/images/icons/authorimage_default.png"
    />
    <div class="opacity-90">
      <p v-if="writtenBy" class="block ltr:text-xs rtl:text-sm uppercase">
        {{ $t("meta.writtenBy") }}
      </p>
      <p
        v-else-if="translatedBy"
        class="block ltr:text-xs rtl:text-sm uppercase"
      >
        {{ $t("meta.translatedBy") }}
      </p>
      <h4>{{ name }}</h4>
      <p v-if="bio">{{ bio }}</p>
    </div>
  </div>
</template>

<script>
import appImage from "~/components/UI/appImage";
export default {
  name: "Author",
  components: {
    appImage,
  },
  props: {
    name: {
      type: String,
    },
    picture: {
      type: Object,
    },
    bio: {
      type: String,
    },
    writtenBy: {
      default: true,
    },
    translatedBy: {
      default: false,
    },
  },
  components: {
    appImage,
  },
};
</script>
