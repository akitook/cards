<template>
  <section class="page-container">
    <div class="link-container" :class="{ isShow: card.isSend }">
      <input id="url" type="text" :value="cardUrl" readonly />
      <Button @action="copyURL">copy link</Button>
    </div>
    <Button v-if="!card.isSend" role="secondary" @action="backToMessage"
      >back</Button
    >
    <Button v-if="card.isSend" role="secondary" @action="backToHome"
      >back to home</Button
    >
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Button from '~/components/atoms/Button.vue'
export default {
  components: {
    Button
  },
  computed: {
    ...mapState(['card']),
    ...mapGetters({
      cardUrl: 'card/cardUrl'
    })
  },
  mounted() {
    this.$store.dispatch('card/flip', false)
    this.$store.dispatch('card/changeReady', true)
    this.$store.dispatch('canvas/changeWritable', false)
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
    copyURL() {
      if (process.client) {
        const codeToCopy = document.querySelector('#url')
        codeToCopy.setAttribute('type', 'text')
        codeToCopy.select()

        try {
          const successful = document.execCommand('copy')
          const msg = successful ? 'successful' : 'unsuccessful'
          alert('Testing code was copied ' + msg)
        } catch (err) {
          alert('Oops, unable to copy')
        }

        /* unselect the range */
        codeToCopy.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
      }
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
