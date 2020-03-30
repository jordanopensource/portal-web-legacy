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
import SocialFeed from '@/components/social-media-feed/SocialFeed';
export default {
    name: 'LatestJOSA',
    components: {
        'socialFeed': SocialFeed
    },
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
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