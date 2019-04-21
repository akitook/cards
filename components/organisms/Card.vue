<template>
  <div
    :class="{ flipped: isFlipped, ready: isReadySend, send: isSend }"
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
        console.log(canvasData)
        this.$store.dispatch('card/send', canvasData)
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
  margin: -70px auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  -webkit-transform-origin: var(--originX) var(--originY);
  transform-origin: var(--originX) var(--originY);
  transform: scale(0.7);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s,
    transform-origin 0.5s, width 0.7s ease-in-out, height 0.7s ease-in-out,
    margin 0.7s ease-in-out, box-shadow 0.7s ease-in-out 1s;
  cursor: pointer;
  animation-duration: 1s;
  z-index: 999;
  &.flipped {
    margin: 0 auto;
    transform: rotateX(180deg) scale(var(--scale));
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  }
  &.ready {
    margin: 0 auto;
    transform: rotateX(0deg) scale(0.7);
    @-webkit-keyframes bounce {
      from,
      6%,
      18%,
      26%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      13%,
      15% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }

      26% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);
      }

      30% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
    }
    @keyframes bounce {
      from,
      6%,
      18%,
      26%,
      to {
        -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        -webkit-transform: translate3d(0, 0, 0) scale(0.7);
        transform: translate3d(0, 0, 0) scale(0.7);
      }

      13%,
      15% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -20px, 0) scale(0.7);
        transform: translate3d(0, -20px, 0) scale(0.7);
      }

      26% {
        -webkit-animation-timing-function: cubic-bezier(
          0.755,
          0.05,
          0.855,
          0.06
        );
        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
        -webkit-transform: translate3d(0, -10px, 0) scale(0.7);
        transform: translate3d(0, -10px, 0) scale(0.7);
      }

      30% {
        -webkit-transform: translate3d(0, 0, 0) scale(0.7);
        transform: translate3d(0, 0, 0) scale(0.7);
      }
    }
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
    @keyframes guruguru {
      0% {
        transform: rotate3d(0.2, 1, 0, 180deg) scale(0.7);
      }
      50% {
        transform: rotate3d(0.2, 1, 0, 00deg) scale(0.7);
      }
      100% {
        transform: rotate3d(0.2, 1, 0, 180deg) scale(0.7);
      }
    }
    animation: yurayura 4s infinite 2s;
  }
  &.send {
    margin: 0 auto;
    transform-style: preserve-3d;
    @-webkit-keyframes bounceOutUp {
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

    @keyframes bounceOutUp {
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
    animation: bounceOutUp forwards 3s;
  }
  .ripple-container {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    z-index: 9999;
  }
}
</style>
