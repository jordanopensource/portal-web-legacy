<template>
  <div :dir="$dir()">
    <mainHeader/>
    <backToTop/>
    <FlashMessage :position="'right top'"/>
    <nuxt class="content-wrapper md:px-0 bg-white"/>
    <mainFooter/>
  </div>
</template>

<script>
import mainHeader from '~/components/UI/Header';
import mainFooter from '~/components/UI/Footer';
import backToTop from '~/components/UI/BackToTop';

export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      title: this.$i18n.locale == 'ar' ? 'الجمعية الأردنية للمصدر المفتوح' : 'Jordan Open Source Association',
    }
  },
  components: {
    mainHeader,
    mainFooter,
    backToTop
  },
}

</script>
