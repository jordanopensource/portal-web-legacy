<template>
  <div class="board-staff-page">

    <!-- Banner -->
    <pageBanner :pageMeta="pageInfo" />

    <!-- Lists -->
    <div class="container pb-20" v-if="$fetchState.timestamp && team.length">
      <boardStaffList class="board-staff-list" :teamList="team" role="board" :title="$t('boardStaff.board')" />
      <boardStaffList class="board-staff-list" :teamList="team" role="staff" :title="$t('boardStaff.staff')" />
      <boardStaffList class="board-staff-list" :teamList="team" role="previousBoard"
        :title="$t('boardStaff.previousBoard')" compact />
      <boardStaffList class="board-staff-list" :teamList="team" role="previousStaff"
        :title="$t('boardStaff.previousStaff')" compact />
    </div>
  </div>

</template>

<script>
  import pageBanner from "@/components/UI/PageBanner";
  import boardStaffList from '@/components/BoardStaff/BoardStaffList';

  export default {
    layout: "default",
    data() {
      return {
        team: []
      }
    },
    components: {
      pageBanner,
      boardStaffList
    },
    head() {
      const i18nSeo = this.$nuxtI18nSeo()
      return {
        title: this.pageInfo['title_' + this.$i18n.locale] + ' - ' + (this.$i18n.locale == 'ar' ?
          'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association'),
        meta: [{
            name: 'description',
            content: this.pageInfo['metaDescription_' + this.$i18n.locale] ? this.pageInfo['metaDescription_' + this
              .$i18n.locale] : ''
          },
          ...i18nSeo.meta
        ]
      }
    },
    computed: {
      pageInfo() {
        return this.$store.state.pages.boardandstaff
      }
    },
    async fetch() {
      let list = this.$store.state.team.list
      if (!list) {
        await this.$store.dispatch("team/fetch")
      }
      this.team = this.$store.state.team.list
    },
  };
</script>

<style scoped>
  .board-staff-list {
    @apply px-6 mt-20;
  }

  @screen md {
    .board-staff-list {
      @apply px-12;
    }
  }
</style>