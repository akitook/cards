<template>
  <div class="header" :class="{ flex: canvas.isWritable }">
    <div class="logo-wrapper">
      <Logo :class="{ small: this.$route.name === 'message' }" />
    </div>
    <CardSelector v-if="this.$route.name === 'index'" />
    <CanvasActions v-if="canvas.isWritable" />
    <div v-if="message" class="message">
      {{ message }}
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
        message = 'Tap your card to post.'
      } else if (this.$route.name === 'card') {
        message = 'Tap to flip this card.'
      }
      return message
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  position: relative;
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
  }
}
</style>
