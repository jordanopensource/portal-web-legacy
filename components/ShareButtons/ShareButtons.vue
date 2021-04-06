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
        <span class="share-buttons tooltip" @click="copyToClipboard(url)">
            <span class="tooltiptext" id="myTooltip">Copy link</span>
            <font-awesome-icon icon="link" size="2x"/>
        </span>
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
        methods: {
            copyToClipboard(str) {
                var el = document.createElement('textarea');
                el.value = str;
                el.setAttribute('readonly', '');
                el.style = {
                    position: 'absolute',
                    left: '-9999px'
                };
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                var tooltip = document.getElementById("myTooltip");
                tooltip.innerHTML = "Copied !";
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
    
    .tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  margin-left: -50px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>