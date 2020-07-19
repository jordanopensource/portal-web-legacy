<template>
  <div class="bg-josa-warm-grey">
        <h2 class="title">{{ $t('socialFeed.title') }}</h2>
        <socialFeed v-for="post in loadedPosts"
        :key="post.id"
        :id="post.id"
        :src="post.src"
        :text="post.text"
        :imageUrl="post.imageUrl"
        :time="post.time"/>
  </div>
</template>

<script>
import SocialFeed from '@/components/SocialMediaFeed/SocialFeed';
export default {
    name: 'LatestJOSA',
    components: {
        'socialFeed': SocialFeed
    },
    computed: {
        loadedPosts() {
            var locale = this.$i18n.locale
            var posts = this.$store.getters.loadedPosts
            var localizedPosts = posts.filter(element => element.lang == locale)
            var fbPosts = localizedPosts.filter(element => element.src == 'fb').slice(0,2)
            var twPosts = localizedPosts.filter(element => element.src == 'tw').slice(0,2)
            var finalPosts = fbPosts.concat(twPosts)
            return finalPosts
        },
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
