<template>
  <section v-show="card.zoom.scale <= 1" class="pageContainer">
    <Button role="secondary" @action="backToDesign">
      back
    </Button>
    <Button v-if="canvas.history.length > 0" @action="toSend">
      <span class="en">next: </span>
      <span class="ja">送信画面へ</span>
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
    backToDesign() {
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
