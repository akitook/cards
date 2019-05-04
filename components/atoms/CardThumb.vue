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
      return `/templates/${this.data.category}/${this.data.title}@0,25x.jpg`
    }
  }
}
</script>
<style scoped lang="scss">
.CardThumb {
  flex: 0 0;
  display: table-cell;
  box-shadow: 0 0 4px 0 rgba(14, 19, 24, 0.15);
  border-collapse: separate;
  border-spacing: 2px 0;
  transition: all 0.2s;
  line-height: 0;
  &.selected {
    transform: scale(1.2);
    box-shadow: 0 0 12px 0 rgba(14, 19, 24, 0.15);
  }
  img {
    width: 32px;
    height: 44.4px;
  }
}
</style>
