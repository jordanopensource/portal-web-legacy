<template>
<div class="bg-josa-warm-grey pb-12">
    <h2 class="title ">{{ $t('ourCommunity.title') }}</h2>

    <div class="grid grid-cols-5 grid-rows-2 gap-4 pb-8"> 
        <img class="thumbs" v-for="i in 10" :key="i" src="~/static/instagram-feed/4.jpg" alt="">
    </div>

    <div class="pb-8">
    <p><strong>{{ $t('ourCommunity.text1') }}</strong></p>
    <p>{{ $t('ourCommunity.text2') }}</p>
    </div>
    
    <div class="flex flex-wrap justify-between">
    <nuxt-link class="mb-4 button button-blue-full" to="#" tag="a">{{ $t('button.membersHub') }}</nuxt-link>
    <nuxt-link class="mb-4 button button-blue" to="#" tag="a">{{ $t('button.login') }}</nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'OurCommunity',
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
    #bot-1 {
        @apply w-full m-auto p-5;
        max-width: 250px;
        right: -20px;
        bottom: 0;
    }
    @screen md {
        #bot-1 {
            max-width: 500px;
        }
    }
</style>
