<template>
  <div class="back-container">back</div>
</template>
<script></script>
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
  background: #ccc;
  z-index: 1;
}
</style>
