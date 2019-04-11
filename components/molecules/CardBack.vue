<template>
  <div class="back-container">
    <canvas id="canvas" :width="width" :height="height"></canvas>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { fabric } from 'fabric'
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
  data() {
    return {
      canvas: null
    }
  },
  computed: {
    ...mapState(['card'])
  },
  watch: {
    writable: function(newVal) {
      console.log('change writable mode.')
      this.card.canvas.isDrawingMode = newVal
    }
  },
  mounted() {
    const canvas = new fabric.Canvas('canvas')
    canvas.isDrawingMode = true
    canvas.freeDrawingBrush.width = 6
    canvas.freeDrawingBrush.color = '#333'
    this.$store.dispatch('card/initCanvas', canvas)
    canvas.on('after:render', () => {
      this.$store.dispatch('card/changeCanvas', canvas.toJSON())
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
