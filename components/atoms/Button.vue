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
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $font-1;
  font-size: 18px;
  padding: 4px 32px;
  border: 2px solid $dark-054;
  border-radius: 0.4em 2em 0.5em 3em/3em 0.5em 2em 0.5em;
  color: $dark-087;
  &:hover {
    cursor: pointer;
  }
  a {
    color: $dark-087;
    text-decoration: none;
  }
  &.primary {
    display: inline-block;
    background-color: #fff;
  }
  &.secondary {
    display: inline-block;
    color: $dark-054;
    border: none;
    a {
      color: $dark-054;
    }
  }
  &.red {
    display: inline-block;
    color: $red-500;
    border-color: $red-500;
  }
  .en {
  }
  .ja {
    font-size: 13px;
  }
}
</style>
