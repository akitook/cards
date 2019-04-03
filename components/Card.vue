<template>
  <div
    :class="{ flipped: isFlipped }"
    class="card-container"
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
      isFlipped: false
    }
  }
}
</script>
<style scoped lang="scss">
.card-container {
  position: relative;
  width: 90%;
  max-width: $card-width;
  height: auto;
  max-height: $card-height;
  box-shadow: 0 4px 12px 0 rgba(14, 19, 24, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  &.flipped {
    transform: rotateX(180deg);
  }
}
</style>
