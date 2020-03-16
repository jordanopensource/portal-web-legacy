<template>
<div class="bg-josa-blue-dark text-white flex flex-wrap pb-20">
    <div class="pt-12 pl-12 pr-4 w-full">
        <h2 class="title">Join Us</h2>
    </div>
    <div class="px-12 w-full md:w-1/2">
    <p class="mb-4"><strong>JOSA is made by the efforts of members and volunteers like you!</strong></p>
    <p class="mb-4">Do you love Open Source? Lead the change in Jordan by joining us:</p>
    <nuxt-link class="mb-4 button button-blue-full" to="#" tag="a">Join JOSA</nuxt-link>
    </div>
    <div class="w-full px-12 md:w-1/2 md:pr-0 md:pl-15px relative">
        <img id="bot-1" class="md:absolute" src="~/static/images/bots/bot-1.svg" alt="bot-1">
    </div>
</div>
</template>

<script>
export default {
    name: 'JoinUs',
}
</script>

<style scoped>
    .title {
        @apply relative py-6;
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
