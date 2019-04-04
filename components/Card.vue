<template>
  <div
    :class="{ flipped: isFlipped }"
    class="card-container"
    :style="{ width: `${cardWidth}px`, height: `${cardHeight}px` }"
    @click="isFlipped = !isFlipped"
  >
    <CardFront />
    <CardBack />
  </div>
</template>
<script>
import CardFront from '~/components/CardFront.vue'
import CardBack from '~/components/CardBack.vue'

export default {
  components: {
    CardFront,
    CardBack
  },
  data: function() {
    return {
      isFlipped: false,
      cardWidth: 300,
      cardHeight: 444
    }
  },
  computed: {},
  mounted() {
    if (process.browser) {
      this.cardWidth = window.innerWidth * 0.7
      console.log(window.innerWidth)
      this.cardHeight = this.cardWidth * 1.48
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
  box-shadow: 0 4px 12px 0 rgba(14, 19, 24, 0.15);
  transform-style: preserve-3d;
  transition: transform 2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  &.flipped {
    transform: rotateX(180deg);
  }
}
</style>
