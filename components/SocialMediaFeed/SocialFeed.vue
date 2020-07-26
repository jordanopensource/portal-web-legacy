<template>
    <div :id="id" class="flex items-start">
        <img v-if="src == 'fb'" class="block max-w-full ltr:mr-4 rtl:ml-4 w-20 h-auto flex-shrink-0" src="@/static/images/icons/fb.svg" alt="icon">
        <img v-if="src == 'tw'" class="block max-w-full ltr:mr-4 rtl:ml-4 w-20 h-auto flex-shrink-0" src="@/static/images/icons/tw.svg" alt="icon">
        <div class="mb-6 flex-grow">
            <p>{{ text }}</p>
            <img v-if="imageUrl" :src="imageUrl">
            <p class="opacity-50">{{ localizedTime }}</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: 'SocialFeed',
    props: {
        id: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: false
        }
    },
    computed: {
        localizedTime() {
            var date = moment(new Date(this.time)).locale(this.$i18n.locale).format('ddd, DD MMM YYYY');
            return date
        }
    },
}
</script>

<style scoped>
    p, img {
        @apply pb-6
    }
</style>
