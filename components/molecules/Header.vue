<template>
  <div class="header" :class="{ flex: canvas.isWritable }">
    <div class="logo-wrapper" @click="clickLogo">
      <Logo
        :class="{
          small: this.$route.name === 'message'
        }"
      />
    </div>
    <InfoModal />
    <CardSelector />
    <CanvasActions />
    <div v-if="message" class="message">
      <div class="en">{{ message.en }}</div>
      <div class="ja">{{ message.ja }}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import Logo from '~/components/atoms/Logo.vue'
import CardSelector from '~/components/organisms/CardSelector'
import CanvasActions from '~/components/organisms/CanvasActions'
import InfoModal from '~/components/organisms/InfoModal'

export default {
  components: {
    Logo,
    CardSelector,
    CanvasActions,
    InfoModal
  },
  computed: {
    ...mapState(['card', 'canvas']),
    ...mapGetters({
      isReadySend: 'card/isReady',
      isSend: 'card/isSend'
    }),
    message() {
      let message = null
      if (this.$route.name === 'send' && this.card.isSend) {
        message = {
          en: 'Copy this URL below and send it.',
          ja: '下記URLをコピーして、カードを送りたい相手にメールやSNSで送信'
        }
      } else if (this.$route.name === 'send' && !this.isReadySend) {
        message = {
          en: 'Enter names.',
          ja: '自分の名前とカードを贈りたい相手を入力'
        }
      } else if (this.$route.name === 'send' && this.card.isReady) {
        message = {
          en: 'Tap your card to post.',
          ja: '準備ができたらカードをタップ'
        }
      } else if (this.$route.name === 'card') {
        message = {
          en: 'Tap this card to flip.',
          ja: 'カードをタップ'
        }
      }
      return message
    }
  },
  methods: {
    clickLogo() {
      if (this.$route.name !== 'message') {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  position: relative;
  max-width: 580px;
  margin: 0 auto;
  text-align: center;
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 24px 0 4px;
    &.index {
      animation: opening 3s;
      @keyframes opening {
        0% {
          width: 100vw;
          height: 100vh;
        }
        70% {
          width: 100vw;
          height: 100vh;
        }
        100% {
          width: 100%;
          height: 60px;
        }
      }
    }
  }
  &.flex {
    display: flex;
    align-items: center;
    padding: 16px;
    .logo-wrapper {
      width: auto;
      height: auto;
      padding: 0;
    }
  }
  .message {
    font-family: $font-1;
    font-size: 20px;
    .en {
    }
    .ja {
      font-size: 12px;
      color: $dark-054;
    }
  }
}
</style>
