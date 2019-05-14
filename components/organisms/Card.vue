<template>
  <div
    :class="{
      opening: isOpening,
      flipped: isFlipped,
      ready: isReadySend,
      send: isSend
    }"
    class="card-container"
    :style="styles"
    @click="sendCard"
  >
    <div v-if="isReadySend && !isSend" class="ripple-container">
      <RippleCircle />
    </div>
    <CardFront :url="cardFrontUrl" />
    <CardBack :width="getCardSize.width" :height="getCardSize.height" />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import CardFront from '~/components/molecules/CardFront.vue'
import CardBack from '~/components/molecules/CardBack.vue'
import RippleCircle from '~/components/atoms/RippleCircle'

export default {
  components: {
    CardFront,
    CardBack,
    RippleCircle
  },
  computed: {
    ...mapState(['card', 'canvas']),
    ...mapGetters({
      cardFrontUrl: 'card/cardFrontUrl',
      isFlipped: 'card/isFlipped',
      isReadySend: 'card/isReady',
      isSend: 'card/isSend',
      isOpening: 'card/isOpening',
      getCardSize: 'card/getCardSize'
    }),
    styles() {
      return {
        '--width': `${this.getCardSize.width}px`,
        '--height': `${this.getCardSize.height}px`,
        '--scale': this.card.zoom.scale,
        '--originX': `${
          this.card.zoom.x ? this.card.zoom.x : this.getCardSize.x / 2
        }px`,
        '--originY': `${
          this.card.zoom.y ? this.card.zoom.y : this.getCardSize.y / 2
        }px`
      }
    }
  },
  mounted() {},
  methods: {
    sendCard() {
      if (this.isReadySend) {
        const canvasData = JSON.stringify(this.canvas.data.toJSON())
        this.$store.dispatch('card/send', canvasData)
        this.$gtag('event', 'sendCard', {
          template_title: this.card.template.title,
          background_image: this.card.template.bg,
          canvas_history: this.canvas.history.length
        })
      }
    },
    pinch(e) {}
  }
}
</script>
<style scoped lang="scss">
.card-container {
  --width: $card-width;
  --height: $card-height;
  --scale: 0.7;
  --originX: 50%;
  --originY: 50%;
  position: relative;
  width: var(--width);
  max-width: var(--width);
  height: var(--height);
  max-height: var(--height);
  margin: -52px auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  -webkit-transform-origin: var(--originX) var(--originY);
  transform-origin: var(--originX) var(--originY);
  transform: scale(0.7);
  transition: transform 1.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s,
    transform-origin 0.5s, width 0.7s ease-in-out, height 0.7s ease-in-out,
    margin 0.7s ease-in-out, box-shadow 0.7s ease-in-out 1s;
  cursor: pointer;
  animation-duration: 1s;
  z-index: 10;
  &.opening {
    //animation: opening 2s forwards;
    transform: scale(2);
    @keyframes opening {
      0% {
        transform: scale(2);
      }
      20% {
        transform: scale(2);
      }
      100% {
        transform: scale(0.7);
      }
    }
  }
  &.flipped {
    margin: 0 auto;
    transform: rotateX(180deg) scale(var(--scale));
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  }
  &.ready {
    margin: 0 auto;
    transform: rotateX(0deg) scale(0.7);
    @keyframes yurayura {
      0% {
        transform: translate3d(0, 0, 0) scale(0.7);
      }
      50% {
        transform: translate3d(0, -10px, 0) scale(0.7);
      }
      100% {
        transform: translate3d(0, 0, 0) scale(0.7);
      }
    }
    animation: yurayura 4s infinite 2s;
  }
  &.send {
    margin: 0 auto;
    transform-style: preserve-3d;
    @-webkit-keyframes sendCard {
      20% {
        opacity: 1;
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px) rotateX(0deg) scale(0.7);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0) rotateX(0deg) scale(0.7);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0) rotateX(0deg) scale(0.7);
      }
    }

    @keyframes sendCard {
      20% {
        opacity: 1;
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0) rotateX(0deg) scale(0.7);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0) rotateX(0deg) scale(0.7);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0) rotateX(0deg) scale(0.7);
      }
    }
    animation: sendCard forwards 3s;
  }
  .ripple-container {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    z-index: 9999;
  }
}
</style>
