<template>
  <div class="CanvasActions">
    <div @click="clearCanvas">clear</div>
    <div>back</div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    clearCanvas() {
      this.$store.dispatch('card/clearCanvas')
    }
  }
}
</script>
<style scoped lang="scss">
.CardSelector {
}
</style>
