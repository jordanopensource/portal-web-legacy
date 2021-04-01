<template>
    <div :class="$i18n.locale == 'ar' ? ['buttons','justify-end','flex-row-reverse'] : 'buttons' ">
        <div>
            <a class="color" :href="'https://twitter.com/share?url=' +Url">
                <font-awesome-icon :icon="['fab','twitter']" size="2x" />
            </a>
        </div>
        <div class="mleft">
            <a class="color" :href="'https://www.linkedin.com/shareArticle?url=' +Url">
                <font-awesome-icon :icon="['fab','linkedin']" size="2x" />
            </a>
        </div>
        <div class="mleft">
            <a class="color" :href="'https://www.facebook.com/sharer.php?u=' +Url">
                <font-awesome-icon :icon="['fab','facebook-square']" size="2x" />
            </a>
        </div>
        <div class="mleft">
            <span :class="copyColor" @click="copyToClipboard(Url)">
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
            Url: null,
            copyColor:'color',
        }
    },
    mounted() {
        this.Url = window.location.href;
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
        this.copyColor = 'copyColor';
}
    }
}
</script>

<style scoped>
    .buttons {
        @apply flex;
    }
    .mleft {
        @apply ml-4;
    }
    .color {
        color: #aea79f;
    }
    .copyColor{
        color:#3897c0;
    }
    
</style>