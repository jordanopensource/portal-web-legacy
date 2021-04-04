<template>
    <div :class="$i18n.locale == 'ar' ? ['flex','justify-end','flex-row-reverse'] : 'flex' ">
        <div>
            <a class="color" :href="'https://twitter.com/share?url=' +url" target="_blank">
                <font-awesome-icon :icon="['fab','twitter']" size="2x" />
            </a>
        </div>
        <div class="ml-4">
            <a class="color" :href="'https://www.linkedin.com/shareArticle?url=' +url" target="_blank">
                <font-awesome-icon :icon="['fab','linkedin']" size="2x" />
            </a>
        </div>
        <div class="ml-4">
            <a class="color" :href="'https://www.facebook.com/sharer.php?u=' +url" target="_blank">
                <font-awesome-icon :icon="['fab','facebook-square']" size="2x" />
            </a>
        </div>
        <div class="ml-4">
            <span class="copyColor" @click="copyToClipboard(url)">
                <font-awesome-icon icon="link" size="2x" />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShareButtons',
    data() {
        return {
            url: null,
        }
    },
    mounted() {
        this.url = window.location.href;
    },
    methods:{
     copyToClipboard (str) {
        var el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
       }
    }
}
</script>

<style scoped>
    .color {
        @apply text-josa-warm-grey-dark
    }
    .color:hover {
        @apply text-josa-blue;
    }
    .copyColor{
        @apply text-josa-warm-grey-dark;
        cursor: pointer;
    }
    .copyColor:active{
        @apply text-josa-blue;
    }
</style>