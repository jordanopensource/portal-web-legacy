<template>
  <transition name="back-to-top-fade">
    <div @click="toTop" v-show="scY>300" class="back-to-top">
      <div class="default">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"></path>
        </svg>
      </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      scTimer: 0,
      scY: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  }
}
</script>

<style scoped>
.back-to-top-fade-enter-active, .back-to-top-fade-leave-active {
  transition: opacity .7s
}

.back-to-top-fade-enter, .back-to-top-fade-leave-to {
  opacity: 0
}

.back-to-top {
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  bottom: 2rem;
  text-align: center
}

[dir=ltr] .back-to-top {
  right: 2rem
}

[dir=rtl] .back-to-top {
  left: 2rem
}

.back-to-top .default {
  fill: currentColor;
  color: #14b7b8
}

.back-to-top:hover .default {
  color: #099293
}

.back-to-top .icon {
  width: 3.5rem;
  height: 3.5rem;
  font-size: 3.5rem;
  border-radius: 50%
}
</style>