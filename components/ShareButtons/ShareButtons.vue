<template>
    <div class="md:flex frame">
        <a class="share-buttons" :href="'https://twitter.com/share?url=' +url" target="_blank">
            <font-awesome-icon :icon="['fab','twitter']" size="2x" />
        </a>
        <a class="share-buttons" :href="'https://www.linkedin.com/shareArticle?url=' +url" target="_blank">
            <font-awesome-icon :icon="['fab','linkedin']" size="2x" />
        </a>
        <a class="share-buttons" :href="'https://www.facebook.com/sharer.php?u=' +url" target="_blank">
            <font-awesome-icon :icon="['fab','facebook-square']" size="2x" />
        </a>
        <span class="share-button tooltip" @click="copyToClipboard(url)">
            <font-awesome-icon icon="link" size="2x" />
            <span ref="copyButton" class="copy-tooltip-text invisible"></span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'ShareButtons',
        props: {
            url: {
                type: String,
                required: true
            }
        },
        methods: {
            copyToClipboard(str) {
                var copyTooltip = this.$refs.copyButton;
                let e = this.$options.filters.copyString(str)
                if (e) {
                    copyTooltip.classList.toggle("invisible")
                    copyTooltip.innerText = this.$t("tooltip.copied")
                    setTimeout(() => {
                        copyTooltip.classList.toggle("invisible")
                        copyTooltip.innerText = ""
                    }, 1000)
                }
            },
        }
    }
</script>

<style scoped>
.share-buttons{
        @apply text-josa-warm-grey-dark;
        @apply ml-4;
        
        cursor: pointer;
    }

.share-buttons:hover{
        @apply text-josa-blue;
        cursor: pointer;
    }
    
[dir="rtl"] .frame{
    @apply justify-end ;
    @apply flex-row-reverse;
}  
    article[dir="ltr"] {
        @apply ml-4;
    }
    article[dir="rtl"] {
        @apply mr-4;
    }
    
</style>