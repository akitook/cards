<template>
  <div class="CanvasActions">
    <IconButton text="text">
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
    <iconButton text="grid" @action="showGrid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
      >
        <path
          d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"
        />
      </svg>
    </iconButton>
    <IconButton text="zoom" @action="showZoomWindow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
      >
        <path
          d="M13 10h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
        />
      </svg>
    </IconButton>
    <IconButton color="red" text="All Clear" @action="clearCanvas">
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
    <CardZoom></CardZoom>
  </div>
</template>
<script>
import CardZoom from '~/components/organisms/CardZoom.vue'
import IconButton from '~/components/atoms/IconButton.vue'

export default {
  components: {
    IconButton,
    CardZoom
  },
  methods: {
    clearCanvas() {
      this.$store.dispatch('canvas/clear')
    },
    undoCanvas() {
      this.$store.dispatch('canvas/undo')
    },
    showZoomWindow() {
      this.$store.dispatch('card/showZoomWindow', 'toggle')
    },
    showGrid() {
      this.$store.dispatch('card/showGrid', 'toggle')
    }
  }
}
</script>
<style scoped lang="scss">
.CanvasActions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  transition: all 0.4s 0.6s;
}
</style>
