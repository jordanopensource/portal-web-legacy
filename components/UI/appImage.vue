<template>
  <img :src="imageUrl" :alt="image.alternativeText">
</template>

<script>
  export default {
    props: {
      image: {
        type: Object,
        required: true
      },
      size: {
        type: String
      }
    },
    computed: {
      imageUrl() {
        switch (this.image.ext) {
          case ".jpeg":
            return process.env.baseUrl + this.format().url
            break;
          case ".png":
            return process.env.baseUrl + this.format().url
            break;
          case ".svg": 
            return process.env.baseUrl + this.image.url
            break;
        }
      }
    },
    methods: {
      format() {
        const size = this.size;
        const format = this.image.formats[size];
        if (format) {
          return format
        } else {
          const formats = this.image.formats;
          const first = Object.keys(formats)[0]
          return formats[first]
        }
      }
    }
  }

</script>