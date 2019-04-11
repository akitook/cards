<template>
  <div
    :class="{ flipped: isFlipped, ready: isReadySend, send: isSend }"
    class="card-container"
    :style="{
      width: `${getCardSize.width}px`,
      height: `${getCardSize.height}px`
    }"
    @click="sendCard"
  >
    <div class="ripple-container">
      <RippleCircle v-if="isReadySend" />
    </div>
    <CardFront :url="cardFrontUrl" />
    <CardBack
      :writable="card.isWritable"
      :width="getCardSize.width"
      :height="getCardSize.height"
    />
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
    ...mapState(['card']),
    ...mapGetters({
      cardFrontUrl: 'card/cardFrontUrl',
      isFlipped: 'card/isFlipped',
      isReadySend: 'card/isReady',
      isSend: 'card/isSend',
      getCardSize: 'card/getCardSize'
    })
  },
  mounted() {},
  methods: {
    sendCard() {
      if (this.isReadySend) {
        this.$store.dispatch('card/changeReady', false)
        this.$store.dispatch('card/send')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.card-container {
  position: relative;
  width: $card-width;
  max-width: $card-width;
  height: $card-height;
  max-height: $card-height;
  margin: -70px auto;
  box-shadow: 0 0px 12px 0 rgba(14, 19, 24, 0.15);
  transform-style: preserve-3d;
  transform: scale(0.7);
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s,
    width 0.7s ease-in-out, height 0.7s ease-in-out, margin 0.7s ease-in-out;
  cursor: pointer;
  border-radius: 4px;
  animation-duration: 1s;
  z-index: 999;
  &.flipped {
    margin: 0 auto;
    transform: rotateX(180deg) scale(1);
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
    @-webkit-keyframes bounceOutUp {
      20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0) scale(0.7);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0) scale(0.7);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0) scale(0.7);
      }
    }

    @keyframes bounceOutUp {
      20% {
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0) scale(0.7);
      }

      40%,
      45% {
        opacity: 1;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0) scale(0.7);
      }

      to {
        opacity: 0;
        -webkit-transform: translate3d(0, -2000px, 0);
        transform: translate3d(0, -2000px, 0) scale(0.7);
      }
    }
    -webkit-animation-name: bounceOutUp;
    animation-name: bounceOutUp;
    animation-fill-mode: forwards;
  }
  .ripple-container {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    z-index: 9999;
  }
}
</style>
