<template>
  <div class="header">
    <Logo />
    <CardSelector />
  </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
import CardSelector from '~/components/CardSelector'
export default {
  components: {
    Logo,
    CardSelector
  }
}
</script>
<style scoped lang="scss">
.header {
  text-align: center;
}
</style>
