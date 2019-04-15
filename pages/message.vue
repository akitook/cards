<template>
  <section class="pageContainer">
    <Button role="secondary" @action="backToHome">
      back
    </Button>
    <Button @action="toSend">
      next
    </Button>
  </section>
</template>

<script>
import Button from '~/components/atoms/Button.vue'
export default {
  components: {
    Button
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
