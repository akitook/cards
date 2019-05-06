<template>
  <div class="ThankYou">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        :class="{ isSelected: selected }"
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-12c.331 1.465 2.827 4 6.001 4 3.134 0 5.666-2.521 5.999-4zm-9.5-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    selected: {
      type: Boolean,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.ThankYou {
  path {
    fill: $dark-054;
    transition: all 0.2s;
    &.isSelected {
      fill: #e6ac00;
      animation: pulse 1s;
      transform-origin: center;
      @-webkit-keyframes pulse {
        from {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }

        50% {
          -webkit-transform: scale3d(1.05, 1.05, 1.05);
          transform: scale3d(1.05, 1.05, 1.05);
        }

        to {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
      }

      @keyframes pulse {
        from {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }

        50% {
          -webkit-transform: scale3d(1.05, 1.05, 1.05);
          transform: scale3d(1.05, 1.05, 1.05);
        }

        to {
          -webkit-transform: scale3d(1, 1, 1);
          transform: scale3d(1, 1, 1);
        }
      }
    }
  }
}
</style>
