<template>
  <div class="Love">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        :class="{ isSelected: selected }"
        d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
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
.Love {
  path {
    fill: $dark-054;
    transition: all 0.2s;
    &.isSelected {
      fill: #ff7061;
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
