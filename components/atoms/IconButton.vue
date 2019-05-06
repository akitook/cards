<template>
  <div :class="color" class="IconButton" @click="$emit('action')">
    <slot></slot>
    <div class="text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'normal'
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.IconButton {
  padding: 0 10px;
  text-align: center;
  font-family: $font-1;
  font-size: 13px;
  color: $dark-087;
  &.red {
    color: $red-500;
    background-color: transparent !important;
    path {
      fill: $red-500;
    }
  }
  &.gray {
    color: $dark-087;
    path {
      fill: $dark-087;
    }
  }
  svg {
    display: block;
    margin: 0 auto;
  }
}
</style>
