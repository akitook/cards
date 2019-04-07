import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'
import card from './modules/card'
import cards from './modules/cards'
// import snackbar from './modules/snackbar'
Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      card,
      cards
    }
  })
}

export default store
