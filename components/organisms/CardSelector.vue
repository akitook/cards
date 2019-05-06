<template>
  <div v-if="this.$route.name === 'index'" class="CardSelector">
    <PurposeList />
    <CardList />
  </div>
</template>
<script>
import PurposeList from '~/components/organisms/PurposeList'
import CardList from '~/components/organisms/CardList'

export default {
  components: {
    PurposeList,
    CardList
  }
}
</script>
<style scoped lang="scss">
.CardSelector {
}
</style>
