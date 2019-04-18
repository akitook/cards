<template>
  <section v-show="card.zoom.scale <= 1" class="pageContainer">
    <Button role="secondary" @action="backToHome">
      back
    </Button>
    <Button v-if="canvas.history.length > 0" @action="toSend">
      next
    </Button>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import Button from '~/components/atoms/Button.vue'
export default {
  components: {
    Button
  },
  computed: {
    ...mapState(['card', 'canvas'])
  },
  mounted() {
    this.$store.dispatch('card/flip', true)
    this.$store.dispatch('canvas/changeWritable', true)
  },
  methods: {
    backToHome() {
      this.$router.push('/')
    },
    toSend() {
      this.$router.push('/send')
    }
  }
}
</script>

<style scoped lang="scss">
.pageContainer {
  padding: 16px;
  text-align: center;
}
</style>
