<template>
  <div class="CanvasActions">
    <div @click="clearCanvas">clear</div>
    <div @click="undoCanvas">undo</div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    clearCanvas() {
      this.$store.dispatch('canvas/clear')
    },
    undoCanvas() {
      this.$store.dispatch('canvas/undo')
    }
  }
}
</script>
<style scoped lang="scss">
.CardSelector {
}
</style>
