<template>
  <div class="ShowCard">
    <div
      :class="{ flipped: isFlipped }"
      :style="styles"
      class="card-container"
      @click="flipCard"
    >
      <CardFront :url="cardFrontUrl" />
      <CardBack :width="getCardSize.width" :height="getCardSize.height" />
    </div>
    <Button :class="{ show: showButton }" class="button" @action="toHome">
      reply ?
    </Button>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import CardFront from '~/components/molecules/CardFront.vue'
import CardBack from '~/components/molecules/CardBack.vue'
import Button from '~/components/atoms/Button.vue'

export default {
  components: {
    CardFront,
    CardBack,
    Button
  },
  data() {
    return {
      isFlipped: false,
      showButton: false
    }
  },
  computed: {
    ...mapState(['card', 'canvas']),
    ...mapGetters({
      cardFrontUrl: 'card/cardFrontUrl',
      getCardSize: 'card/getCardSize'
    }),
    styles() {
      return {
        '--width': `${this.getCardSize.width}px`,
        '--height': `${this.getCardSize.height}px`
      }
    }
  },
  mounted() {
    this.$store.dispatch('canvas/changeWritable', false)
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped
      this.showButton = true
    },
    toHome() {
      this.$router.push('/')
      this.$store.dispatch('canvas/clear')
    }
  }
}
</script>
<style scoped lang="scss">
.ShowCard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card-container {
  --width: $card-width;
  --height: $card-height;
  position: relative;
  width: var(--width);
  max-width: var(--width);
  height: var(--height);
  max-height: var(--height);
  margin: 16px auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transform: scale(0.9);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s,
    width 0.7s ease-in-out, height 0.7s ease-in-out,
    box-shadow 0.7s ease-in-out 1s;
  cursor: pointer;
  z-index: 999;
  animation-duration: 1s;
  &.flipped {
    transform: rotateX(180deg) scale(1);
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  }
}
.button {
  opacity: 0;
  transition: opacity 0.4s 4s;
  &.show {
    opacity: 1;
  }
}
</style>
