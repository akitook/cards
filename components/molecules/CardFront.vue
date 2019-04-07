<template>
  <div class="front-container">
    <img v-if="url" :src="url" />
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    }
  }
}
</script>
<style scoped lang="scss">
.front-container {
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  z-index: 2;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
