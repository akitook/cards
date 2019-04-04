<template>
  <div class="PurposeList">
    <div class="container">
      <PurposeItem
        v-for="(data, index) in purposes"
        :key="index"
        :data="data"
      />
    </div>
  </div>
</template>
<script>
import PurposeItem from '~/components/PurposeItem'
export default {
  components: {
    PurposeItem
  },
  data() {
    return {
      purposes: [
        {
          id: 'seasonal',
          title: 'Seasonal'
        },
        {
          id: 'birthday',
          title: 'Birthday'
        },
        {
          id: 'thankyou',
          title: 'ThankYou'
        },
        {
          id: 'love',
          title: 'Love'
        },
        {
          id: 'congratulations',
          title: 'Congratulations'
        },
        {
          id: 'wedding',
          title: 'Wedding'
        },
        {
          id: 'hellobaby',
          title: 'HelloBaby'
        },
        {
          id: 'workplace',
          title: 'WorkPlace'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.PurposeList {
  position: relative;
  width: 88%;
  margin: 0 auto;
  height: 64px;

  &:before {
    position: absolute;
    content: '';
    top: 24px;
    left: -8px;
    width: 12px;
    height: 12px;
    border-top: 1px solid $dark-054;
    border-left: 1px solid $dark-054;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &:after {
    position: absolute;
    content: '';
    top: 24px;
    right: -8px;
    width: 12px;
    height: 12px;
    border-top: 1px solid $dark-054;
    border-left: 1px solid $dark-054;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  .container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
