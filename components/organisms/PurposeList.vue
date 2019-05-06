<template>
  <div class="PurposeList">
    <div class="container">
      <PurposeItem
        v-for="(data, index) in purposes"
        :key="index"
        :data="data"
        :selected="cards.category"
        @select="selectCategory(data)"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import PurposeItem from '~/components/molecules/PurposeItem'
import purposeData from '~/seed/purpose.json'
export default {
  components: {
    PurposeItem
  },
  data() {
    return {
      purposes: purposeData
    }
  },
  computed: {
    ...mapState(['cards'])
  },
  methods: {
    selectCategory(data) {
      this.$store.dispatch('cards/setCategory', data)
      this.$store.dispatch('card/setCategory', data)
    }
  }
}
</script>

<style scoped lang="scss">
.PurposeList {
  position: relative;
  width: 88%;
  margin: 0 auto;
  &:before {
    position: absolute;
    content: '';
    top: 24px;
    left: -8px;
    width: 10px;
    height: 10px;
    border-top: 1px solid $dark-054;
    border-left: 1px solid $dark-054;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &:after {
    position: absolute;
    content: '';
    top: 24px;
    right: -8px;
    width: 10px;
    height: 10px;
    border-top: 1px solid $dark-054;
    border-left: 1px solid $dark-054;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  .container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
