<template>
<div class="bg-josa-warm-grey">
    <h2 class="title ">Our Slack</h2>

    <div class="pb-8">
    <p>Our Slack is open to everyone interested in Open Source in Jordan. If you would like to join JOSA’s Slack (where most of our internal communications happen) please fill the form:</p>
    </div>

    <a class="mb-4 button button-blue-full" href="https://docs.google.com/forms/d/e/1FAIpQLScAHhgfIM19skn1PejQkmojqzI_a3uF-qgMrDQD16Ge-miGBQ/viewform" target="_blank"><font-awesome-icon class="mr-2" :icon="['fab', 'slack']"/>
    Join JOSA's Slack</a>
</div>
</template>

<script>
export default {
    name: 'JoinSlack',
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
