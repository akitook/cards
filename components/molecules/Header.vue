<template>
  <div class="header">
    <Logo :class="{ small: this.$route.name !== 'index' }" />
    <CardSelector v-if="this.$route.name === 'index'" />
    <CanvasActions v-if="card.isWritable" />
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
    ...mapState(['card'])
  },
  watch: {
    $route() {
      console.log(this.$route)
    }
  },
  created: function() {
    console.log(this.$route)
  }
}
</script>
<style scoped lang="scss">
.header {
  text-align: center;
}
</style>
