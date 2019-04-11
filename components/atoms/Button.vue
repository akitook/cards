<template>
  <div :class="role" class="button" @click="$emit('action')">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    role: {
      type: String,
      default: 'primary'
    }
  }
}
</script>
<style scoped lang="scss">
.button {
  display: inline-block;
  font-family: $font-1;
  padding: 4px 32px;
  border: 2px solid $dark-054;
  border-radius: 0.4em 2em 0.5em 3em/3em 0.5em 2em 0.5em;
  color: $dark-087;
  a {
    color: $dark-087;
    text-decoration: none;
  }
  &.primary {
    background-color: #fff;
  }
  &.secondary {
    color: $dark-054;
    border: none;
    a {
      color: $dark-054;
    }
  }
}
</style>
