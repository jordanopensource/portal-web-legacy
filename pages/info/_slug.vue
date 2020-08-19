<template>
  <div>
    <pageBanner :pageMeta="pageContent" />

    <div class="container py-20">
      <div class="px-12 flex flex-wrap md:flex-no-wrap" v-if="ifNotEmpty()">
        <!-- Sections Menu -->
        <ul class="sections-menu md:ltr:pr-12 md:rtl:pl-12 pb-8 md:pb-0 w-full md:w-1/4 flex-shrink-0">
          <li v-for="section in pageContent.section" :key="section.sectionId"
            :class="activeSection == section.sectionId ? 'active': ''" class="section-link"
            @click="setActiveSection(section.sectionId)">
            <span v-if="section['title_' + $i18n.locale]">{{ section['title_' + $i18n.locale] }}</span>
            <span v-else></span>
          </li>
        </ul>
        <!-- Section Content -->
        <template v-for="section in pageContent.section">
          <div :key="section.sectionId" v-if="activeSection == section.sectionId"
            class="section-content flex-grow md:h-half-screen overflow-auto">
            <span v-if="section['description_' + $i18n.locale]"
              v-html="$md.render(section['description_' + $i18n.locale])"></span>
            <span v-else></span>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import pageBanner from "~/components/UI/PageBanner";
  export default {
    head() {
      return {
        title: this.pageContent['title_' + this.$i18n.locale],
        meta: [{
          hid: 'info-page',
          name: 'Info Page'
        }]
      }
    },
    layout: "default",
    components: {
      pageBanner
    },
    methods: {
      setActiveSection(section) {
        this.activeSection = section
      },
      ifNotEmpty() {
        if (Array.isArray(this.pageContent.section) && this.pageContent.section.length)
          return true;
        else
          return false;
      },
    },
    asyncData({
      params,
      error
    }) {
      return axios
        .get(process.env.baseUrl + '/info-pages?pageId=' + params.slug)
        .then(res => {
          if(res.data[0].id) {
            const ifSections = (Array.isArray(res.data[0].section) && res.data[0].section.length) ? true : false
            const activeSec = ifSections ? res.data[0].section[0].sectionId : ''
            return {
              pageContent: res.data[0],
              activeSection: activeSec
            }
          } else {
            return error({
              statusCode: 404,
              message: 'This page could not be found'
            })
          }
        })
        .catch(e => {
          error({
            statusCode: 404,
            message: 'This page could not be found'
          })
        })
    }
  }

</script>

<style scoped>
  .section-link {
    @apply text-josa-warm-grey-dark cursor-pointer relative mb-3 leading-relaxed;
  }

  .section-link:hover,
  .section-link.active {
    @apply text-black;
  }

  .section-link:hover:before,
  .section-link.active:before {
    content: "";
    background-color: #a3d1e4;
    height: 100%;
    width: 8px;
    display: block;
    position: absolute;
  }

  [dir="ltr"] .section-link:hover:before,
  [dir="ltr"] .section-link.active:before {
    left: -8px;
  }

  [dir="rtl"] .section-link:hover:before,
  [dir="rtl"] .section-link.active:before {
    right: -8px;
  }

  [dir="ltr"] .section-link {
    padding-left: 8px;
  }

  [dir="rtl"] .section-link {
    padding-right: 8px;
  }

  .section-content>>>h3 {
    @apply text-2xl pb-4 font-bold opacity-90;
  }

  .section-content>>>p {
    @apply mb-4;
  }

</style>
