<template>
  <transition name="canvasAction">
    <div v-if="canvas.isWritable" class="CanvasActions">
      <IconButton color="red" text="Clear All" @action="showDialog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
          />
        </svg>
      </IconButton>
      <IconButton
        v-if="canvas.isDrawingMode"
        text="select mode"
        @action="toggleDrawing"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.536 7.555c-1.188-.252-4.606-.904-5.536-1.088v-3.512c0-1.629-1.346-2.955-3-2.955s-3 1.326-3 2.955v7.457c-.554-.336-1.188-.621-1.838-.715-1.822-.262-3.162.94-3.162 2.498 0 .805.363 1.613 1.022 2.271 3.972 3.972 5.688 5.125 6.059 9.534h9.919v-1.748c0-5.154 3-6.031 3-10.029 0-2.448-1.061-4.157-3.464-4.668zm.357 8.022c-.821 1.483-1.838 3.319-1.891 6.423h-6.13c-.726-3.82-3.81-6.318-6.436-8.949-.688-.686-.393-1.37.442-1.373 1.263-.006 3.06 1.884 4.122 3.205v-11.928c0-.517.458-.955 1-.955s1 .438 1 .955v6.948c0 .315.256.571.572.571.314 0 .57-.256.57-.571v-.575c0-.534.49-.938 1.014-.833.398.079.686.428.686.833v1.273c0 .315.256.571.571.571s.571-.256.571-.571v-.83c0-.531.487-.932 1.008-.828.396.078.682.424.682.828v1.533c0 .315.256.571.571.571s.571-.256.571-.571v-.912c0-.523.545-.867 1.018-.646.645.305 1.166.932 1.166 2.477 0 1.355-.465 2.193-1.107 3.354z"
          />
        </svg>
      </IconButton>
      <IconButton v-else text="drawing mode" @action="toggleDrawing">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path
            d="M18.308 0l-16.87 16.873-1.436 7.127 7.125-1.437 16.872-16.875-5.691-5.688zm-15.751 21.444l.723-3.585 12.239-12.241 2.861 2.862-12.239 12.241-3.584.723zm17.237-14.378l-2.861-2.862 1.377-1.377 2.861 2.861-1.377 1.378z"
          />
        </svg>
      </IconButton>
      <IconButton text="text" @action="newText">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <path
            d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z"
          />
        </svg>
      </IconButton>
      <iconButton text="paper" @action="switchBg">
        <div
          class="bgIcon"
          :class="`type-${card.template.bg < 5 ? card.template.bg + 1 : 0}`"
        />
      </iconButton>
      <IconButton text="undo" @action="undoCanvas">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
          />
        </svg>
      </IconButton>
      <Dialog :show="show" @action-cancel="closeDialog" @action="clearCanvas" />
    </div>
  </transition>
</template>
<script>
import { mapState } from 'vuex'

import Dialog from '~/components/molecules/Dialog'
import IconButton from '~/components/atoms/IconButton.vue'

export default {
  components: {
    IconButton,
    Dialog
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['card', 'canvas'])
  },
  methods: {
    showDialog() {
      this.show = true
    },
    closeDialog() {
      this.show = false
    },
    clearCanvas() {
      this.$store.dispatch('canvas/clear')
      this.show = false
    },
    undoCanvas() {
      this.$store.dispatch('canvas/undo')
    },
    toggleDrawing() {
      this.$store.dispatch('canvas/toggleDrawing')
    },
    /*
    showZoomWindow() {
      this.$store.dispatch('card/showZoomWindow', 'toggle')
    },
    */
    switchBg() {
      this.$store.dispatch('card/switchBg')
    },
    newText() {
      this.$store.dispatch('canvas/newText')
    }
  }
}
</script>
<style scoped lang="scss">
.canvasAction-enter-active {
  transition: opacity 0.2s 1.4s;
}
.canvasAction-leave-active {
  transition: opacity 0s;
}
.canvasAction-enter, .canvasAction-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.CanvasActions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  .bgIcon {
    width: 14px;
    height: 14px;
    border: 1px solid #000;
    margin: 0 auto;
    background-size: contain;

    &.type-0 {
      background: url('~assets/img/bg/exclusive_paper_@2x.png') center center;
    }
    &.type-1 {
      background: url('~assets/img/bg/linedpaper_@2x.png') center center;
    }
    &.type-2 {
      background: url('~assets/img/bg/handmadepaper_@2x.png') center center;
    }
    &.type-3 {
      background: url('~assets/img/bg/hip-square.png') center center;
    }
    &.type-5 {
    }
  }
}
</style>
