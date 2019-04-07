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
    }
  },
  mounted() {
    const canvas = new fabric.Canvas('canvas')
    canvas.isDrawingMode = true
    canvas.freeDrawingBrush.width = 4
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
