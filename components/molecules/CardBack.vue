<template>
  <div class="back-container">
    <canvas id="canvas" :width="width" :height="height"></canvas>
  </div>
</template>
<script>
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
    },
    clear: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      canvas: null
    }
  },
  watch: {
    writable: function(newVal) {
      this.canvas.isDrawingMode = newVal
    },
    clear: function() {
      this.canvas.clear()
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas('canvas')

    this.canvas.isDrawingMode = true
    this.canvas.freeDrawingBrush.width = 6
    this.canvas.freeDrawingBrush.color = '#333'
    this.canvas.on('after:render', () => {
      this.$store.dispatch('card/changeCanvas', this.canvas.toJSON())
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
