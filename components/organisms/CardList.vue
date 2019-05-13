<template>
  <div class="CardList">
    <div v-if="cards" class="container">
      <CardThumb
        v-for="(data, index) in categoryCardList"
        :key="index"
        :data="data"
        :class="{ selected: data.id === card.template.id }"
        @select="selectThumb(data)"
      />
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

import CardThumb from '~/components/atoms/CardThumb'
export default {
  components: {
    CardThumb
  },
  computed: {
    ...mapState(['cards', 'card']),
    ...mapGetters({
      categoryCardList: 'cards/categoryCardList'
    })
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
  border-collapse: separate;
  border-spacing: 8px;
  position: relative;
  width: 100%;
  margin: 0 auto 8px;
  .container {
    display: flex;
    justify-content: left;
    align-items: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0 16px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
