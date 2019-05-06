<template>
  <section class="pageContainer">
    <Button @action="toMessage">
      <span class="en">next: </span>
      <span class="ja">言葉やイラストを描く</span>
    </Button>
  </section>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
export default {
  components: {
    Button
  },
  created() {
    this.$store.dispatch('cards/fetchCards')
  },
  mounted() {
    this.$store.dispatch('card/flip', false)
    this.$store.dispatch('canvas/changeWritable', false)
    this.$store.dispatch('card/changeReady', false)
  },
  methods: {
    toMessage() {
      this.$router.push('/message')
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
