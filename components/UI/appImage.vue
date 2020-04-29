<template>
    <img :src="imageUrl" 
    :alt="image.alternativeText">
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            required: true
        },
        size: {
            type: String,
            required: true
        }
    },
    computed: {
        format() {
            const size = this.size;
            const format = this.image.formats[size];
            return format
        },
        imageUrl() {
            return process.env.baseUrl + this.format.url
        }
    }
}
</script>

<style>

</style>