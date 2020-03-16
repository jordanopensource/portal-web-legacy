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
    props: {
        id: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true  
        }
    },
}
</script>

<style scoped>
 h3 {
     @apply mb-6 text-josa-blue uppercase;
 }
</style>