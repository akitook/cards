<template>
  <div class="PurposeItem">
    <div class="icon">
      <Seasonal v-if="data.id === 'seasonal'" />
      <Congratulations v-if="data.id === 'congratulations'" />
      <HelloBaby v-if="data.id === 'hellobaby'" />
      <Love v-if="data.id === 'love'" />
      <Birthday v-if="data.id === 'birthday'" />
      <ThankYou v-if="data.id === 'thankyou'" />
      <Wedding v-if="data.id === 'wedding'" />
      <WorkPlace v-if="data.id === 'workplace'" />
    </div>
    <div class="title">{{ data.title }}</div>
  </div>
</template>
<script>
import Seasonal from '~/components/atoms/icons/Seasonal'
import Congratulations from '~/components/atoms/icons/Congratulations'
import HelloBaby from '~/components/atoms/icons/HelloBaby'
import Love from '~/components/atoms/icons/Love'
import Birthday from '~/components/atoms/icons/Birthday'
import ThankYou from '~/components/atoms/icons/ThankYou'
import Wedding from '~/components/atoms/icons/Wedding'
import WorkPlace from '~/components/atoms/icons/WorkPlace'

export default {
  components: {
    Seasonal,
    Congratulations,
    HelloBaby,
    Love,
    Birthday,
    ThankYou,
    Wedding,
    WorkPlace
  },
  props: {
    data: {
      type: Object,
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
    font-size: 10px;
    color: $dark-087;
  }
}
</style>
