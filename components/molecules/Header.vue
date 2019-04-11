<template>
  <div class="header">
    <Logo :class="{ small: this.$route.name !== 'index' }" />
    <CardSelector v-if="this.$route.name === 'index'" />
  </div>
</template>
<script>
import { mapState } from 'vuex'

import Logo from '~/components/atoms/Logo.vue'
import CardSelector from '~/components/organisms/CardSelector'
export default {
  components: {
    Logo,
    CardSelector
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
