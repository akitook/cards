<template>
  <transition name="dialog-fade">
    <div v-if="show" class="Dialog">
      <div class="dialog-container">
        <div class="dialog-title">
          <div class="en">Are you sure you want to clear all?</div>
          <div class="ja">本当に全て削除しますか？</div>
        </div>
        <div class="dialog-action">
          <Button role="secondary" @action="$emit('action-cancel')"
            >cancel</Button
          >
          <Button role="red" @action="$emit('action')">Clear All</Button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Button from '~/components/atoms/Button.vue'

export default {
  components: {
    Button
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s;
}
.dialog-fade-enter, .dialog-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.Dialog {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  background: $dark-054;
  z-index: 9999;
  .dialog-container {
    width: 280px;
    background: #fff;
    padding: 16px;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  }
  .dialog-title {
    font-family: $font-1;
    padding: 32px 0;
    font-size: 20px;
    .ja {
      color: $dark-054;
      font-size: 12px;
    }
  }
  .dialog-action {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
