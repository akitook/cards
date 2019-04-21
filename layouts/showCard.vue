<template>
  <div class="container">
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from '~/components/molecules/Header.vue'

export default {
  components: {
    Header
  }
}
</script>
<style scoped lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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

.container {
  position: relative;
  height: 100vh;
}
</style>
