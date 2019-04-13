<template>
  <div class="back-container">
    <canvas id="canvas" :width="width" :height="height"></canvas>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  props: {
    writable: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState(['canvas'])
  },
  mounted() {
    this.$store.dispatch('canvas/init')
    this.canvas.data.on('path:created', () => {
      this.$store.dispatch('canvas/change')
    })
  }
}
</script>
<style scoped lang="scss">
.back-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  backface-visibility: hidden;
  transform: rotateX(180deg);
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1;
}
</style>
