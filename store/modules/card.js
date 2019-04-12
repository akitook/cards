// import firebase from '../../api/firebase'

const state = {
  data: {
    id: '0000',
    category: 'seasonal'
  },
  isFlipped: false,
  isReady: false,
  isSend: false,
  isWritable: false,
  clear: false,
  json: null
}

const getters = {
  cardFrontUrl: state => {
    return `/templates/${state.data.category}/${state.data.id}.png`
  },
  isFlipped: state => {
    return state.isFlipped
  },
  isReady: state => {
    return state.isReady
  },
  isSend: state => {
    return state.isSend
  },
  getCardSize: state => {
    if (process.browser) {
      const cardWidth = window.innerWidth < 400 ? window.innerWidth * 0.9 : 400
      const cardHeight = cardWidth * 1.48
      return { width: cardWidth, height: cardHeight }
    }
    return { width: 0, height: 0 }
  }
}

const actions = {
  flip({ dispatch, commit }, boolean) {
    commit('FLIP', boolean)
  },
  setCardData({ dispatch, commit }, cardData) {
    commit('SET_CARD_DATA', cardData)
    dispatch('flip', false)
  },
  changeReady({ commit }, boolean) {
    commit('CHANGE_READY', boolean)
  },
  changeWritable({ dispatch, commit }, boolean) {
    commit('CHANGE_WRITABLE', boolean)
  },
  clearCanvas({ dispatch, commit }) {
    commit('CLEAR_CANVAS')
  },
  changeCanvas({ commit }, json) {
    commit('SET_OBJECT', json)
  },
  send({ dispatch, commit }) {
    commit('SEND')
  },
  clearAll({ dispatch, commit }) {
    commit('CLEAR_ALL')
  }
}

const mutations = {
  FLIP: (state, boolean) => {
    boolean === 'toggle'
      ? (state.isFlipped = !state.isFlipped)
      : (state.isFlipped = boolean)
  },
  SET_CARD_DATA: (state, res) => {
    state.data = res
  },
  CHANGE_WRITABLE: (state, boolean) => {
    state.isWritable = boolean
  },
  CHANGE_READY: (state, boolean) => {
    state.isReady = boolean
  },
  CLEAR_CANVAS: state => {
    state.json = null
    state.clear = !state.clear
  },
  SET_OBJECT: (state, json) => {
    state.json = json
  },
  SEND: state => {
    state.isSend = true
  },
  CLEAR_ALL: state => {
    state.data = {
      id: '0000',
      category: 'seasonal'
    }
    state.isFlipped = false
    state.isReady = false
    state.isWritable = false
    state.isSend = false
    state.json = null
  },
  INIT_CANVAS: (state, canvas) => {
    state.canvas = canvas
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
