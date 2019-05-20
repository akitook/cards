<template>
  <section class="indexContainer">
    <div class="message">
      <div class="en">Enter from & to names.</div>
      <div class="ja">
        自分の名前とカードを贈りたい相手の名前を入力してください。
      </div>
    </div>
    <div class="inputContainer">
      <div class="label">from</div>
      <input
        id="fromName"
        v-model="card.from"
        type="text"
        placeholder="your name"
      />
      <div class="label">to</div>
      <input id="toName" v-model="card.to" type="text" placeholder="who ?" />
    </div>
    <Button v-if="nameValidation" @action="toDesign">
      <span class="en">next: </span>
      <span class="ja">デザインを選ぶ</span>
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
  data() {
    return {}
  },
  computed: {
    ...mapState(['card']),
    nameValidation() {
      return !!(this.card.from.length && this.card.to.length)
    }
  },
  mounted() {
    this.$store.dispatch('canvas/changeWritable', false)
    this.$store.dispatch('card/changeReady', false)
  },
  methods: {
    toDesign() {
      this.$router.push('/design')
    }
  }
}
</script>

<style scoped lang="scss">
.indexContainer {
  max-width: 300px;
  margin: 0 auto;
  padding: 16px;
  text-align: center;
  font-family: $font-1;
  font-size: 20px;
  opacity: 0;
  animation: showIndex 1s ease 3s forwards;
  @keyframes showIndex {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .message {
    .ja {
      color: $dark-054;
      font-size: 12px;
    }
  }
  .inputContainer {
    margin: 32px auto;
  }
  input {
    width: 100%;
    margin: 24px auto;
    padding: 8px;
    background: #fff;
    text-align: center;
    font-size: 24px;
    border-bottom: 1px solid $dark-026;
  }
}
</style>
