<template>
  <div class="CardList">
    <div v-if="cards" class="container">
      <CardThumb
        v-for="(data, index) in cards.records"
        :key="index"
        :data="data"
        :class="{ selected: data.id === card.id }"
        @select="selectThumb(data)"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

import CardThumb from '~/components/atoms/CardThumb'
export default {
  components: {
    CardThumb
  },
  computed: {
    ...mapState(['cards', 'card'])
  },
  methods: {
    selectThumb(data) {
      this.$store.dispatch('card/setCardData', data)
    }
  }
}
</script>

<style scoped lang="scss">
.CardList {
  position: relative;
  width: 100%;
  margin: 0 auto;
  .container {
    display: flex;
    align-items: flex-end;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 16px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
