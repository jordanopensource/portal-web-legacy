<template>
<div class="bg-josa-warm-grey">
    <h2 class="title ">Our Newsletter</h2>

    <div class="pb-8">
    <p>We send a weekly newsletter with all JOSA’s activities, events and blog posts, in addition to several hand-picked content for our members and supporters.</p>
    </div>
    
    <newsletterForm />
</div>
</template>

<script>
import NewsletterForm from './NewsletterForm';
export default {
    name: 'OurNewsletter',
    components: {
        'newsletterForm': NewsletterForm,
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
