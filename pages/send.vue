<template>
  <section class="page-container">
    <div class="link-container" :class="{ isShow: isSend }">
      <input type="text" />
      <Button>copy link</Button>
    </div>
    <Button v-if="!isSend" role="secondary" @action="backToMessage"
      >back</Button
    >
    <Button v-if="isSend" role="secondary" @action="backToHome"
      >back to home</Button
    >
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '~/components/atoms/Button.vue'
export default {
  components: {
    Button
  },
  computed: {
    ...mapGetters({
      isSend: 'card/isSend'
    })
  },
  mounted() {
    this.$store.dispatch('card/flip', false)
    this.$store.dispatch('card/changeReady', true)
  },
  methods: {
    backToMessage() {
      this.$store.dispatch('card/changeReady', false)
      this.$router.push('/message')
    },
    backToHome() {
      this.$store.dispatch('card/clearAll')
      this.$router.push('/')
    },
    to() {
      this.$store.dispatch('card/clearCanvas')
    }
  }
}
</script>

<style scoped lang="scss">
.page-container {
  padding: 16px;
  text-align: center;
}
.link-container {
  position: absolute;
  top: 50%;
  left: calc(50% - 150px);
  width: 300px;
  opacity: 0;
  transition: opacity 1s 1s;
  input {
    background: #fff;
  }
  &.isShow {
    opacity: 1;
  }
}
</style>
