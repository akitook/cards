<template>
  <section class="page-container">
    <NameContainer />
    <div class="link-container" :class="{ isShow: card.isSend }">
      <input
        id="url"
        ref="url"
        type="text"
        :value="cardUrl"
        readonly
        @click="focusUrl"
      />
      <Button
        v-clipboard:copy="cardUrl"
        v-clipboard:success="copyUrl"
        :class="{ black: isCopy }"
        class="button"
        >{{ isCopy ? 'copied!' : 'copy URL' }}</Button
      >
      <div class="message">
        <div class="en">Or send it by your account.</div>
        <div class="ja">またはtwitter, LINEのアカウントで送信</div>
      </div>
      <div class="button-container">
        <TweetButton :url="cardUrl" />
        <LineButton :url="cardUrl" />
      </div>
      <small class="caution"
        >現在テスト稼働中のため予告なくURLにアクセスできなくなる場合があります。ご了承ください。</small
      >
      <Button
        v-if="card.isSend"
        role="secondary"
        class="backHomeButton"
        @action="backToHome"
        >back to home</Button
      >
    </div>
    <Button
      v-if="card.isReady"
      role="secondary"
      class="backButton"
      @action="backToMessage"
      >back</Button
    >
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NameContainer from '~/components/organisms/NameContainer'
import Button from '~/components/atoms/Button.vue'
import LineButton from '~/components/atoms/LineButton.vue'
import TweetButton from '~/components/atoms/TweetButton.vue'

export default {
  components: {
    NameContainer,
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
    copyUrl() {
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
    },
    focusUrl() {
      this.$refs.url.select()
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
  top: calc(50% - 200px);
  left: calc(50% - 150px);
  width: 300px;
  height: 400px;
  font-family: $font-1;
  font-size: 20px;
  opacity: 0;
  transition: opacity 1s 2s;
  z-index: -1;
  .message {
    .ja {
      color: $dark-054;
      font-size: 12px;
    }
  }
  input {
    width: 100%;
    margin: 24px auto;
    padding: 8px;
    background: #fff;
    border: 1px solid $dark-026;
  }
  &.isShow {
    opacity: 1;
    z-index: 10;
    .button-container {
      display: flex;
    }
  }
  .caution {
    margin: 16px auto;
    font-size: 12px;
  }
  .button {
    margin-bottom: 16px;
  }
  .message2 {
    padding-top: 16px;
  }
  .button-container {
    display: none;
    justify-content: center;
  }
  .backButton {
    z-index: 999;
  }
  .backHomeButton {
    margin: 16px auto;
  }
}
</style>
