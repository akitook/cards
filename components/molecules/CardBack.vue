<template>
  <div class="back-container">
    <canvas id="canvas" :width="width" :height="height"></canvas>
    <CardBackground :type="card.template.bg ? card.template.bg : 0" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import CardBackground from '~/components/molecules/CardBackground'

export default {
  components: {
    CardBackground
  },
  props: {
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
    ...mapState(['card', 'canvas'])
  },
  mounted() {
    this.$store.dispatch('canvas/init')
    this.canvas.data.on({
      'path:created': () => {
        this.$store.dispatch('canvas/change')
      },
      'object:modified': () => {
        this.$store.dispatch('canvas/change')
      },
      'touch:pinch': function(event) {
        alert(JSON.stringify(event))
        if (event.e.touches && event.e.touches.length === 2) {
          console.log('multi touch')
        }
      }
    })
    // Add listener event for pinch-zoom
    /*
    console.log(new Hammer())
        const bbScope = this
    const hammer = new Hammer.Manager(this.canvas.data.upperCanvasEl)
    const pinch = new Hammer.Pinch()
    hammer.add([pinch])

    hammer.on('pinch', function(ev) {
      console.log(ev)
      // Set the scale and render only if we have a valid pinch (inside the object)
      if (bbScope._validPinch) {
        bbScope.set('scaleX', ev.scale)
        bbScope.set('scaleY', ev.scale)
        bbScope.canvas.renderAll()
      }
    })
    hammer.on('pinchend', function(ev) {
      bbScope._validPinch = false
    })
    hammer.on('pinchcancel', function(ev) {
      bbScope._validPinch = false
    })
    hammer.on('pinchstart', function(ev) {
      // Convert mouse coordinates to canvas coordinates
      ev.clientX = ev.center.x
      ev.clientY = ev.center.y

      // Check if the pinch was started inside this object
      if (bbScope.canvas) {
        const p = bbScope.canvas.getPointer(ev)
        bbScope._validPinch = bbScope.containsPoint(p)
      } else {
        bbScope._validPinch = false
      }
    })
    */
  },
  methods: {}
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
  z-index: -1;
}
</style>
