<!-- Fetch and list partner based on partner categories-->
<template>
  <div>
    <h2>{{ title }}</h2>
    <template v-if="partners.length">
      <partnerPreview v-for="partner in partners" :key="partner.id" :id="partner.id" :partner="partner" />
    </template>
  </div>
</template>

<script>
  import partnerPreview from '@/components/Partners/PartnerPreview';
  export default {
    components: {
      partnerPreview
    },
    props: {
      title: {
        type: String,
        required: true
      },
      partners: {
        type: Array,
        required: true
      }
    },
  }
</script>