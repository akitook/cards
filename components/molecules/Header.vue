<template>
  <div class="header" :class="{ flex: canvas.isWritable }">
    <div class="logo-wrapper">
      <Logo :class="{ small: this.$route.name !== 'index' }" />
    </div>
    <CardSelector v-if="this.$route.name === 'index'" />
    <CanvasActions v-if="canvas.isWritable" />
  </div>
</template>
<script>
import { mapState } from 'vuex'

import Logo from '~/components/atoms/Logo.vue'
import CardSelector from '~/components/organisms/CardSelector'
import CanvasActions from '~/components/organisms/CanvasActions'
export default {
  components: {
    Logo,
    CardSelector,
    CanvasActions
  },
  computed: {
    ...mapState(['canvas'])
  }
}
</script>
<style scoped lang="scss">
.header {
  text-align: center;
  .logo-wrapper {
    width: 100%;
    height: 60px;
    padding: 24px 0 4px;
  }
  &.flex {
    display: flex;
    align-items: center;
    padding: 16px;
    .logo-wrapper {
      width: auto;
      height: auto;
      padding: 0;
    }
  }
}
</style>
