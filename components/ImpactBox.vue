<template>
<div class="">

    <div class="display-lead pb-8">{{ $t('impactBox.text1') }}</div>

    <p>{{ $t('impactBox.text2') }}</p>

    <nuxt-link to="/" tag="a" class="button button-blue">{{ $t('button.knowMoreImpact') }}</nuxt-link>

</div>
</template>

<script>
export default {
    name: 'ImpactBox',

}
</script>

<style scoped>
    p {
        @apply pb-16
    }
</style>
