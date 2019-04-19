<template>
  <div v-show="card.isShowZoomWindow" class="CardZoom">
    <canvas id="canvas2" width="84" height="124.32" />
    <div class="scale-container">
      <div v-for="n in 12" :key="n" class="button" />
    </div>
    <div class="clear-button" @click="zoomOut">zoom out</div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import { fabric } from 'fabric'

export default {
  components: {},
  data() {
    return {
      data: null,
      zoomGrid: null,
      gridX: 4,
      gridY: 6
    }
  },
  computed: {
    ...mapState(['card', 'canvas']),
    ...mapGetters({
      getCardSize: 'card/getCardSize'
    }),
    scale() {
      return 84 / this.getCardSize.width
    }
  },
  mounted() {
    const canvas2 = new fabric.Canvas('canvas2')
    canvas2.isDrawingMode = false
    canvas2.setWidth(84)
    canvas2.setHeight(124.32)
    this.data = canvas2
    this.canvas.data.on('path:created', () => {
      this.data.clear()
      this.data.loadFromJSON(this.canvas.history.slice(-1)[0])
      this.data.setZoom(this.scale)
      this.data.renderAll()
      this.data.forEachObject(function(object) {
        object.selectable = false
      })
    })
    this.data.on('mouse:up', event => {
      const point = this.data.getPointer(event.e)
      const scale = 4
      const rate = this.getCardSize.width / 84
      console.log(rate)
      const x = point.x
      // rotateしているため, yの値を計算
      const y = this.getCardSize.height - point.y
      console.log(x, y)
      this.$store.dispatch('card/zoom', { scale, x, y })
    })
  },
  methods: {
    zoomOut() {
      this.$store.dispatch('card/zoomOut')
    }
  }
}
</script>
<style scoped lang="scss">
.CardZoom {
  position: absolute;
  bottom: 10%;
  right: 8px;
  width: 84px;
  height: 124.32px;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
  .scale-container {
    position: absolute;
    top: 0;
    width: 84px;
    height: 124.32px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: -1;
    .button {
      width: 28px;
      height: 31.08px;
      border: 1px dotted $dark-012;
      &.zoomed {
        background-color: rgba(blue, 0.2);
      }
    }
  }
  .clear-button {
    margin: 4px 0;
    font-family: $font-1;
    border: 1px solid $dark-054;
    background: #fff;
  }
}
</style>
