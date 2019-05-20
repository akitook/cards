<template>
  <form v-if="!card.isSend" class="NameContainer">
    <label for="fromName" class="label">from</label>
    <input
      id="fromName"
      v-model="card.from"
      type="text"
      placeholder="your name"
    />
    <label for="toName" class="label">to</label>
    <input id="toName" v-model="card.to" type="text" placeholder="who ?" />
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['card'])
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.NameContainer {
  position: absolute;
  top: 85px;
  left: calc(50% - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  margin: 0 auto;
  font-family: $font-1;
  input {
    display: inline-block;
    width: 120px;
    margin: 24px auto;
    padding: 8px;
    background: #fff;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid $dark-026;
  }
}
</style>
