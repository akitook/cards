<template>
  <div class="header" :class="{ flex: canvas.isWritable }">
    <div class="logo-wrapper">
      <Logo :class="{ small: this.$route.name === 'message' }" />
    </div>
    <CardSelector />
    <CanvasActions />
    <div v-if="message" class="message">
      <div class="en">{{ message.en }}</div>
      <div class="ja">{{ message.ja }}</div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import Logo from '~/components/atoms/Logo.vue'
import CardSelector from '~/components/organisms/CardSelector'
import CanvasActions from '~/components/organisms/CanvasActions'
export default {
  components: {
    Logo,
    CardSelector,
    CanvasActions
  },
  computed: {
    ...mapState(['card', 'canvas']),
    message() {
      let message = null
      if (this.$route.name === 'send' && !this.card.isSend) {
        message = {
          en: 'Tap your card to post.',
          ja: '準備ができたらカードをタップ'
        }
      } else if (this.$route.name === 'card') {
        message = {
          en: 'Tap to flip this card.',
          ja: 'カードをタップ'
        }
      }
      return message
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
    width: 100%;
    height: 60px;
    padding: 24px 0 4px;
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
