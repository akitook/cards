<template>
  <div class="CardBackground">
    <div v-if="type === 1" class="grid">
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
    <div v-else :class="`type-${type}`" class="bg" />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: Number,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.CardBackground {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  .grid {
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
  .bg {
    width: 100%;
    height: 100%;
    &.type-0 {
      background: url('~assets/img/bg/exclusive_paper_@2x.png') center center;
      background-size: cover;
    }
    &.type-2 {
      background: url('~assets/img/bg/linedpaper_@2x.png') center center;
      background-size: cover;
    }
    &.type-3 {
      background: url('~assets/img/bg/handmadepaper_@2x.png') center center;
    }
    &.type-4 {
      background: url('~assets/img/bg/hip-square.png') center center;
    }
    &.type-5 {
    }
  }
}
</style>
