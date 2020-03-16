<template>
<div class="flex items-start">
    <img class="block max-w-full mr-4 w-20 h-auto flex-shrink-0" :src="thumbnail" alt="">
    <div class="mb-6 flex-grow">
        <h3>{{ title }}</h3>
        <p class="font-bold block">{{ subtitle}}</p>
        <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
 h3 {
     @apply mb-6 text-josa-blue uppercase;
 }
</style>