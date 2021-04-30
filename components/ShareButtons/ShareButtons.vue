<template>
    <div class="flex flex-wrap items-stretch">
        <a class="share-button" :href="'https://twitter.com/share?url=' + url" target="_blank">
            <font-awesome-icon :icon="['fab','twitter']" :size="faSize" />
        </a>
        <a class="share-button" :href="'https://www.linkedin.com/shareArticle?url=' + url" target="_blank">
            <font-awesome-icon :icon="['fab','linkedin']" :size="faSize" />
        </a>
        <a class="share-button" :href="'https://www.facebook.com/sharer.php?u=' + url" target="_blank">
            <font-awesome-icon :icon="['fab','facebook-square']" :size="faSize" />
        </a>
        <span class="share-button tooltip" @click="copyToClipboard(url)">
            <font-awesome-icon icon="link" :size="faSize" />
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
            },
            size: {
                type: String,
                default: null,
                validator: function validator(value) {
                    return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
                }
            },
            ignoreSize: {
                type: Boolean,
                default: false,
            }
        },
        computed: {
            faSize () {
                return this.ignoreSize 
                    ? null
                    : this.size ?? '2x';
            },
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
    .share-button {
        @apply text-josa-warm-grey-dark cursor-pointer;
    }

    .share-button:hover {
        @apply text-josa-blue;
    }

    [dir="ltr"] .share-button {
        @apply ml-4 mr-0;
    }

    [dir="rtl"] .share-button {
        @apply mr-4 ml-0;
    }
</style>