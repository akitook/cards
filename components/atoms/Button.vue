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
  padding: 4px 32px;
  border-radius: 24px;
  color: #fff;
  background-color: $primary-50;
  a {
    color: #fff;
    text-decoration: none;
  }
  &.primary {
    background-color: $primary-50;
  }
  &.secondary {
    background-color: #fff;
    color: $primary-50;
    a {
      color: $primary-50;
    }
  }
}
</style>
