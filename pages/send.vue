<template>
  <section class="page-container">
    <div class="link-container" :class="{ isShow: card.isSend }">
      <p>Copy this URL below and send it.</p>
      <input id="url" type="text" :value="cardUrl" readonly />
      <Button v-clipboard:copy="cardUrl" v-clipboard:success="copyURL">{{
        isCopy ? 'copied!' : 'copy URL'
      }}</Button>
      <p class="or">or send it by your account</p>
      <div class="button-container">
        <TweetButton :url="cardUrl" tweet="Send this card for you." />
        <LineButton :url="cardUrl" tweet="Send this card for you." />
      </div>
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
import LineButton from '~/components/atoms/LineButton.vue'
import TweetButton from '~/components/atoms/TweetButton.vue'

export default {
  components: {
    Button,
    LineButton,
    TweetButton
  },
  data() {
    return {
      isCopy: false
    }
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
      this.isCopy = true
      /*
      if (process.client) {
        const codeToCopy = document.querySelector('#url')
        const range = document.createRange()
        range.selectNode(codeToCopy)
        window.getSelection().addRange(range)
        document.execCommand('copy')

        window.getSelection().removeAllRanges()
        this.isCopy = true
      }
      */
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
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  font-family: $font-1;
  font-size: 20px;
  opacity: 0;
  transition: opacity 1s 2s;
  p {
  }
  input {
    width: 100%;
    margin: 24px auto;
    background: #fff;
    border-bottom: 1px solid $dark-026;
  }
  &.isShow {
    opacity: 1;
  }
  .or {
    padding-top: 16px;
  }
  .button-container {
    display: flex;
    justify-content: center;
  }
}
</style>
