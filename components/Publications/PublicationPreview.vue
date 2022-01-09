<template>
  <div class="preview my-8 flex flex-wrap md:flex-nowrap">
    <nuxt-link tag="a" :to="publicationLink" class="thumbnail hidden md:block">
      <appImage
        v-if="publication.thumbnail"
        :image="publication.thumbnail"
        size="medium"
      />
      <img v-else :src="placeholderImage" />
    </nuxt-link>
    <div ref="content" class="flex-grow">
      <h5 class="uppercase py-2 md:pt-0">
        <span v-for="(topic, index) in publication.topics" :key="topic.id">
          {{ topic["title_" + $i18n.locale]
          }}{{
            index != Object.keys(publication.topics).length - 1 ? ", " : ""
          }}
        </span>
      </h5>
      <nuxt-link :to="publicationLink">
        <h3 class="mb-4">
          {{
            publication["title_" + $i18n.locale]
              ? publication["title_" + $i18n.locale]
              : publication["title_en"]
          }}
        </h3>
      </nuxt-link>
      <div class="publication-info flex flex-wrap lg:flex-nowrap">
        <p class="ltr:mr-12 rtl:ml-12 mb-4">
          {{ $t("meta.by") }} {{ publication["author_" + $i18n.locale] }}
        </p>
        <p class="whitespace-no-wrap">
          <font-awesome-icon
            class="icon ltr:mr-2 rtl:ml-2"
            :icon="['fas', 'clock']"
          />
          {{ $t("publication.publishDate") }}
          {{ publication.publishDate | fullDate($i18n.locale) }}
        </p>
      </div>
      <nuxt-link :to="publicationLink" class="py-4 text-josa-blue display-more">
        {{ $t("meta.readTheReport") }}
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
  name: "PublicationPreview",
  data() {
    return {
      placeholderImage: process.env.bucketUrl + "/josabots_88f0a93786.jpeg",
    };
  },
  components: {
    appImage,
  },
  props: {
    publication: {
      type: Object,
      required: true,
    },
  },
  computed: {
    publicationLink() {
      var title = "";
      if (this.publication["title_" + this.$i18n.locale]) {
        title = this.publication["title_" + this.$i18n.locale];
      } else {
        title = this.publication.title_en;
      }
      const slug = this.$options.filters.stringToSlug(title);
      return this.localePath(
        "/publications/" + this.publication.id + "/" + slug
      );
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

.preview .thumbnail,
.preview .thumbnail img {
  object-position: 0 0;
  border: 1px solid #eee;
  @apply px-0;
}

@screen md {
  [dir="ltr"] .preview .thumbnail {
    @apply mr-6;
  }

  [dir="rtl"] .preview .thumbnail {
    @apply ml-6;
  }

  .preview .thumbnail,
  .preview .thumbnail img {
    height: 275px;
  }
}

@screen lg {
  .preview .thumbnail,
  .preview .thumbnail img {
    height: 100%;
    width: 250px;
  }
}
</style>
