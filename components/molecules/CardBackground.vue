<template>
  <div class="back-container">
    <canvas id="canvas" :width="width" :height="height"></canvas>
    <CardBackground />
    <div v-if="card.isShowGrid" class="grid-container">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
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
  z-index: -1;
  .grid-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: -1;
    div {
      width: 33%;
      height: 25%;
      border: 1px dotted $dark-012;
    }
  }
}
</style>
