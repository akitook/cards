<template>
  <div :class="role" class="RippleCircle" @click="$emit('action')">
    <span class="ring" />
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
.RippleCircle {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  .ring {
    background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.8));
    position: absolute;
    border-radius: 100px;
    height: 70px;
    width: 70px;
    top: -10px; /*A.中心*/
    left: -10px; /*A.中心*/
    animation: pulsate 1s ease-out; /* スピードなど */
    animation-iteration-count: infinite;
    @keyframes pulsate {
      0% {
        transform: scale(1, 1);
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scale(1.2, 1.2);
        opacity: 0;
      }
    }
  }
}
</style>
