<template>
  <div v-show="card.isShowZoomWindow" class="CardZoom">
    <canvas id="canvas2" width="84" height="124.32" />
    <div class="scale-container">
      <div
        v-for="n in 12"
        :key="n"
        class="button"
        :class="{ zoomed: grid(n) === zoomGrid }"
      />
    </div>
    <div class="clear-button" @click="zoomCard('clear')">zoom out</div>
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
    this.canvas.data.on('after:render', () => {
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
      console.log(point)
    })
  },
  methods: {
    grid(n) {
      let x, y
      if (n < 4) {
        x = 1
        y = n
      } else if (n < 7) {
        x = 2
        y = n - 3
      } else if (n < 10) {
        x = 3
        y = n - 6
      } else if (n < 13) {
        x = 4
        y = n - 9
      }
      return `${x}x${y}`
    },
    zoomCard(position) {
      let scale, x, y
      scale = 4
      if (position === '1x1') {
        x = 0
        y = 80
      } else if (position === '1x2') {
        x = 50
        y = 80
      } else if (position === '1x3') {
        x = 100
        y = 80
      } else if (position === '2x1') {
        x = 0
        y = 60
      } else if (position === '2x2') {
        x = 50
        y = 60
      } else if (position === '2x3') {
        x = 100
        y = 60
      } else if (position === '3x1') {
        x = 0
        y = 40
      } else if (position === '3x2') {
        x = 50
        y = 40
      } else if (position === '3x3') {
        x = 100
        y = 40
      } else if (position === '4x1') {
        x = 0
        y = 20
      } else if (position === '4x2') {
        x = 50
        y = 20
      } else if (position === '4x3') {
        x = 100
        y = 20
      } else {
        scale = 1
        x = 50
        y = 50
      }
      this.$store.dispatch('card/zoom', { scale, x, y })
      this.zoomGrid = position
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
