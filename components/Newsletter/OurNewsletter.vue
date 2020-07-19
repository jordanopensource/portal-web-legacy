<template>
<div class="bg-josa-warm-grey">
    <h2 class="title ">{{ $t('newsletter.title') }}</h2>

    <div class="pb-8">
    <p>{{ $t('newsletter.text') }}</p>
    </div>

    <NewsletterForm />
</div>
</template>

<script>
import NewsletterForm from './NewsletterForm';
export default {
    name: 'OurNewsletter',
    components: {
        'NewsletterForm': NewsletterForm,
    }
}
</script>

<style scoped>
    .title {
        @apply relative w-full py-6;
    }
    .title::before {
    content: '';
    position: absolute;
    width: 20%;
    height: 10px;
    left: 0;
    top: 0;
    border-top: 10px solid #3897c0;
    }
</style>
