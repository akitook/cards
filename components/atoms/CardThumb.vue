<template>
  <div class="CardThumb" @click="$emit('select')">
    <img :src="imgUrl" />
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgUrl: function() {
      return `/templates/${this.data.category}/${this.data.id}.png`
    }
  }
}
</script>
<style scoped lang="scss">
.CardThumb {
  width: 40px;
  box-shadow: 0 0 4px 0 rgba(14, 19, 24, 0.15);
  border-radius: 4px;
  margin: 8px;
  transition: all 0.2s;
  &.selected {
    transform: scale(1.1);
    box-shadow: 0 0 12px 0 rgba(14, 19, 24, 0.15);
  }
  img {
    max-width: 100%;
  }
}
</style>
