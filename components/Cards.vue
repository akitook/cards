<template>
  <div class="cards-container">
    <Card />
  </div>
</template>
<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>
<style scoped lang="scss">
.cards-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
