<template>
  <div v-if="this.$route.name === 'index'" class="InfoModal">
    <IconButton color="gray" text="info" class="infoButton" @action="showModal">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style="enable-background:new 0 0 24 24;"
        xml:space="preserve"
      >
        <path
          d="M7.8,20.1c1.2-3.5,3.1-7.7,3.5-8.9C12,9.7,11,9.1,8,11.7l-0.6-1.2c3.3-3.7,10.4-4.5,8.1,1.2c-1.6,3.5-2.6,6.1-3.1,7.9
	c-1,2.8,1.4,1.6,3.5-0.4c0.4,0.4,0.4,0.6,0.8,1.2C11.6,25.1,6.1,25.5,7.8,20.1z M17.1,4c-1,1-2.6,0.8-3.5,0c-0.8-1-0.8-2.4,0.4-3.3
	c1-1,2.6-0.8,3.5,0C18.3,1.6,18.1,3.2,17.1,4z"
        />
      </svg>
    </IconButton>
    <transition name="modal">
      <div v-if="show" class="modal" :class="show" @action-cancel="closeModal">
        <IconButton
          color="gray"
          text="close"
          class="closeButton"
          @action="closeModal"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            xml:space="preserve"
          >
            <path
              d="M21.8,19.3L14.3,12l7.5-7.5l-2.4-2.3L12,9.7L4.5,2.2L2.2,4.7l7.5,7.5l-7.5,7.3l2.4,2.3l7.5-7.5l7.5,7.5
	C19.5,21.8,21.8,19.3,21.8,19.3z"
            />
          </svg>
        </IconButton>
        <div class="modal-container">
          <div class="title">About</div>
          <div class="contents">
            <div class="content">
              <p class="en">
                "Cards" is a web service that you can make message cards and
                give on the web.
              </p>
              <p class="en">
                If you make a card, you can share the URL with the person you
                want to give by email or SNS, or you can give it directly from
                the button if you are using Twitter or LINE.
              </p>
              <p class="en">
                As this service is in test operation, we may delete creation
                data without notice. Please note.
              </p>
            </div>
            <div class="content">
              <p class="ja">
                「Cards」はメッセージカードをweb上で贈ることができるサービスです。
              </p>
              <p class="ja">
                完成したらURLをメールやSNSで贈りたい相手に共有するか、Twitter,LINEを使っている方はボタンから直接贈ることができます。
              </p>
              <p class="ja">
                このサービスはテスト稼働中のため予告なく作成データを削除する場合があります。ご了承ください。
              </p>
            </div>
            <div class="twitter">
              Twitter:
              <a href="https://twitter.com/hauer93446756" target="_blank"
                >hauer93446756</a
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import IconButton from '~/components/atoms/IconButton.vue'

export default {
  components: {
    IconButton
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['card', 'canvas'])
  },
  methods: {
    showModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    }
  }
}
</script>
<style scoped lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter, .modal-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.infoButton {
  position: absolute;
  top: 16px;
  right: 8px;
}
.InfoModal {
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  padding: 48px;
  font-family: $font-1;
  background: #fff;
  z-index: 9999;
}
.modal-container {
  position: relative;
}
.closeButton {
  position: absolute;
  top: 16px;
  right: 8px;
}
.title {
  font-size: 24px;
}
.contents {
  margin: 32px 0;
  text-align: left;
  .content {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 8px;
    font-size: 18px;
    &.ja {
      color: $dark-054;
      font-size: 14px;
    }
  }
  .twitter {
    margin: 16px 0;
  }
}
</style>
