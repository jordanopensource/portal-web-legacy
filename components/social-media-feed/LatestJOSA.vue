<template>
  <div class="bg-josa-warm-grey">
        <h2 class="title">Latest from JOSA</h2>
  </div>
</template>

<script>
export default {
    name: 'LatestJOSA',
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