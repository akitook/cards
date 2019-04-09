<template>
  <div
    :class="{ flipped: isFlipped }"
    class="card-container"
    :style="{
      width: `${getCardSize.width}px`,
      height: `${getCardSize.height}px`
    }"
  >
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

export default {
  components: {
    CardFront,
    CardBack
  },
  computed: {
    ...mapState(['card']),
    ...mapGetters({
      cardFrontUrl: 'card/cardFrontUrl',
      isFlipped: 'card/isFlipped',
      getCardSize: 'card/getCardSize'
    })
  },
  mounted() {},
  methods: {
    flipCard() {
      if (!this.card.isWritable) {
        this.$store.dispatch('card/flip')
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
  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.7s,
    width 0.7s ease-in-out, height 0.7s ease-in-out, margin 0.7s ease-in-out;
  cursor: pointer;
  border-radius: 4px;
  &.flipped {
    margin: 0 auto;
    transform: rotateX(180deg) scale(1);
  }
}
</style>
