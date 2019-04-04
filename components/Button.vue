<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.button {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 24px;
  color: #fff;
  background-color: $primary-50;
}
</style>
