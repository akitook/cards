<template>
  <div class="Seasonal">
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path
        :class="{ isSelected: selected }"
        d="M13 24h-2v-5.047c-5.047-.478-9-4.536-9-9.453 0-5.238 4.486-9.5 10-9.5s10 4.262 10 9.5c0 4.918-3.954 8.975-9 9.453v5.047zm0-7.058c3.935-.463 6.989-3.624 6.989-7.442 0-4.136-3.584-7.5-7.989-7.5-4.405 0-7.989 3.364-7.989 7.5 0 3.818 3.054 6.978 6.989 7.441l-.001-2.355-5.216-3.804.589-.808 4.627 3.374v-2.96l-3.407-2.508.593-.806 2.814 2.072v-2.564l-1.621-1.161.582-.813 2.039 1.439 2.048-1.439.582.813-1.63 1.167v2.564l2.823-2.078.593.806-3.416 2.514v2.96l4.636-3.38.589.808-5.225 3.81.001 2.35z"
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
.Seasonal {
  path {
    fill: $dark-054;
    transition: all 0.2s;
    &.isSelected {
      fill: #4d6847;
      animation: jello 1s;
      transform-origin: center;
      @-webkit-keyframes jello {
        from,
        11.1%,
        to {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }

        22.2% {
          -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
          transform: skewX(-12.5deg) skewY(-12.5deg);
        }

        33.3% {
          -webkit-transform: skewX(6.25deg) skewY(6.25deg);
          transform: skewX(6.25deg) skewY(6.25deg);
        }

        44.4% {
          -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
          transform: skewX(-3.125deg) skewY(-3.125deg);
        }

        55.5% {
          -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
          transform: skewX(1.5625deg) skewY(1.5625deg);
        }

        66.6% {
          -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
          transform: skewX(-0.78125deg) skewY(-0.78125deg);
        }

        77.7% {
          -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
          transform: skewX(0.390625deg) skewY(0.390625deg);
        }

        88.8% {
          -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
          transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        }
      }

      @keyframes jello {
        from,
        11.1%,
        to {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }

        22.2% {
          -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
          transform: skewX(-12.5deg) skewY(-12.5deg);
        }

        33.3% {
          -webkit-transform: skewX(6.25deg) skewY(6.25deg);
          transform: skewX(6.25deg) skewY(6.25deg);
        }

        44.4% {
          -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
          transform: skewX(-3.125deg) skewY(-3.125deg);
        }

        55.5% {
          -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
          transform: skewX(1.5625deg) skewY(1.5625deg);
        }

        66.6% {
          -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
          transform: skewX(-0.78125deg) skewY(-0.78125deg);
        }

        77.7% {
          -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
          transform: skewX(0.390625deg) skewY(0.390625deg);
        }

        88.8% {
          -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
          transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
        }
      }
    }
  }
}
</style>
