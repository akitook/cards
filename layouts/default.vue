<template>
  <div class="default">
    <div class="container">
      <Header />
      <Card />
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from '~/components/molecules/Header.vue'
import Card from '~/components/organisms/Card.vue'

export default {
  components: {
    Header,
    Card
  }
}
</script>
<style scoped lang="scss">
html {
  font-family: '游ゴシック Medium', YuGothic, YuGothicM,
    'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  margin: 0;
}

.default {
}

.container {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
}
</style>
