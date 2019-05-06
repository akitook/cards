<template>
  <div class="PurposeItem" @click="$emit('select')">
    <div class="icon">
      <Seasonal
        v-if="data.id === 'seasonal'"
        :selected="selected === 'seasonal'"
      />
      <Flower v-if="data.id === 'flower'" :selected="selected === 'flower'" />
      <Congratulations
        v-if="data.id === 'congratulations'"
        :selected="selected === 'congratulations'"
      />
      <Love v-if="data.id === 'love'" :selected="selected === 'love'" />
      <ThankYou
        v-if="data.id === 'thankyou'"
        :selected="selected === 'thankyou'"
      />
    </div>
    <div class="title">{{ data.title }}</div>
  </div>
</template>
<script>
import Seasonal from '~/components/atoms/icons/Seasonal'
import Congratulations from '~/components/atoms/icons/Congratulations'
import Flower from '~/components/atoms/icons/Flower'
import Love from '~/components/atoms/icons/Love'
import ThankYou from '~/components/atoms/icons/ThankYou'

export default {
  components: {
    Seasonal,
    Congratulations,
    Flower,
    Love,
    ThankYou
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  computed: {
    iconUrl: function() {
      return require(`~/assets/img/icons/${this.data.id}.svg`)
    }
  }
}
</script>

<style scoped lang="scss">
.PurposeItem {
  flex: 0 0;
  display: table-cell;
  padding: 8px;
  &:hover {
    opacity: 0.9;
    a:hover {
      opacity: 0.9;
    }
  }
  .icon {
    height: 24px;
  }
  .title {
    font-family: $font-1;
    font-size: 13px;
    color: $dark-087;
  }
}
</style>
