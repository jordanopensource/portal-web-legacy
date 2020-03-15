<template>
<div class="flex items-start">
    <img class="block max-w-full mr-4 h-auto" :src="program.iconUrl" alt="">
    <div class="mb-6 flex-grow">
        <h3>{{ program.title }}</h3>
        <p class="font-bold block">{{ program.subtitle}}</p>
        <p>{{ program.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: [ 'program' ],
}
</script>

<style scoped>
 h3 {
     @apply mb-6 text-josa-blue uppercase;
 }
</style>