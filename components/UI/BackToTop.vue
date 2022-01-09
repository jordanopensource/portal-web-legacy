<template>
  <transition name="back-to-top-fade">
    <div class="back-to-top" v-show="visible" @click="backToTop">
      <slot>
        <div class="default">
          <span v-if="text">
            {{text}}
          </span>
          <span v-else>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z" />
            </svg>
          </span>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'BackToTop',
    props: {
      text: {
        type: String,
        default: null,
      },
      visibleoffset: {
        type: [String, Number],
        default: 760,
      },
      visibleoffsetbottom: {
        type: [String, Number],
        default: 0,
      }
    },
    data() {
      return {
        visible: false
      }
    },
    mounted() {
      window.smoothscroll = () => {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
          window.requestAnimationFrame(window.smoothscroll)
          window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
        }
      }
      window.addEventListener('scroll', this.catchScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.catchScroll)
    },
    methods: {
      catchScroll() {
        const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
        const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this
          .visibleoffsetbottom)
        this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
      },
      backToTop() {
        window.smoothscroll()
        this.$emit('scrolled')
      }
    },
  }

</script>

<style scoped>
  .back-to-top-fade-enter-active,
  .back-to-top-fade-leave-active {
    transition: opacity .7s;
  }

  .back-to-top-fade-enter,
  .back-to-top-fade-leave-to {
    opacity: 0;
  }

  .back-to-top {
    cursor: pointer;
    position: fixed;
    z-index: 1000;
    bottom: 2rem;
    text-align: center;
  }

  [dir="ltr"] .back-to-top {
    right: 2rem;
  }

  [dir="rtl"] .back-to-top {
    left: 2rem;
  }

  .back-to-top .default {
    fill: currentColor;
    color: #3897c0;
  }

  .back-to-top:hover .default {
    color: #1a485b;
  }

  .back-to-top .icon {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 3.5rem;
    border-radius: 50%;
  }

</style>
