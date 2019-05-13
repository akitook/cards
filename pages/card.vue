<template>
  <ShowCard />
</template>
<script>
import { mapState } from 'vuex'
import ShowCard from '~/components/organisms/ShowCard'
export default {
  layout: 'showCard',
  components: {
    ShowCard
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://cards.hauer.jp/card'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'メッセージカードが届いています。'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'メッセージカードが届いています。'
        }
      ]
    }
  },
  data() {
    return {
      isShowModal: false,
      windowHeight: 0,
      innerHeight: 0,
      cardContainerHeight: 0
    }
  },
  computed: {
    ...mapState(['card'])
  },
  async fetch({ store, query }) {
    console.log(query)
    await store.dispatch('card/fetchCardById', query.id)
  },
  created() {},
  mounted() {}
}
</script>
<style lang="scss" scoped></style>
