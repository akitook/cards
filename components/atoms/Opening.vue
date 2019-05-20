<template>
  <div v-if="checkRefferer" class="Opening">
    <transition name="opening">
      <Logo class="openingLogo" />
    </transition>
  </div>
</template>
<script>
import Logo from '~/components/atoms/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    checkRefferer() {
      if (process.browser) {
        const referrer = document.referrer.split('/')[2]
        console.log(document.referrer.split('/'))
        return !(referrer === 'cards.hauer.jp' || referrer === 'localhost:3000')
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped lang="scss">
.opening-enter-active,
.opening-leave-active {
  transition: opacity 0.4s;
}
.opening-enter, .opening-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.Opening {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 48px;
  font-family: $font-1;
  background: #fff;
  z-index: 9999;
  animation: openingWindow 0.5s 4s forwards;
  @keyframes openingWindow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
      z-index: -1;
    }
  }
}
.openingLogo {
  width: 120px;
  left: auto;
  animation: opening 2s 2s forwards;
  @keyframes opening {
    0% {
      top: calc(50% - 28.18px);
    }
    70% {
      width: 120px;
      top: 22px;
    }
    100% {
      width: 80px;
      top: 22px;
    }
  }
}
</style>
