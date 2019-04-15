import firebase from '../../api/firebase'

const state = {
  id: '0000',
  template: {
    id: '0000',
    category: 'seasonal'
  },
  isFlipped: false,
  isReady: false,
  isSend: false
}

const getters = {
  cardUrl: state => {
    return `https://cards.hauer.jp/card?id=${state.id}`
  },
  cardFrontUrl: state => {
    return `/templates/${state.template.category}/${state.template.id}.png`
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
  send({ dispatch, commit }, canvasData) {
    commit('START_SEND_CARD')
    firebase
      .postCard(state.template, canvasData)
      .then(res => {
        commit('SUCCESS_SEND_CARD', res)
      })
      .catch(err => {
        console.log(err)
        commit('FAILED_SEND_CARD')
      })
  },
  clearAll({ dispatch, commit }) {
    commit('CLEAR_ALL')
  },
  fetchCardById({ dispatch, commit }, id) {
    commit('START_FETCH_CARD')
    firebase
      .fetchCardById(id)
      .then(res => {
        commit('SUCCESS_FETCH_CARD', res)
        dispatch('canvas/load', res.canvas, { root: true })
      })
      .catch(err => {
        console.log(err)
        commit('FAILED_FETCH_CARD')
      })
  }
}

const mutations = {
  FLIP: (state, boolean) => {
    boolean === 'toggle'
      ? (state.isFlipped = !state.isFlipped)
      : (state.isFlipped = boolean)
  },
  SET_CARD_DATA: (state, res) => {
    state.template = res
  },
  CHANGE_READY: (state, boolean) => {
    state.isReady = boolean
  },
  START_SEND_CARD: state => {},
  FAILED_SEND_CARD: state => {},
  SUCCESS_SEND_CARD: (state, postContent) => {
    state.isSend = true
    state.id = postContent.id
  },
  CLEAR_ALL: state => {
    state.id = '0000'
    state.template = {
      id: '0000',
      category: 'seasonal'
    }
    state.isFlipped = false
    state.isReady = false
    state.isWritable = false
    state.isSend = false
    state.json = null
  },
  START_FETCH_CARD: state => {},
  FAILED_FETCH_CARD: state => {},
  SUCCESS_FETCH_CARD: (state, res) => {
    state.id = res.id
    state.template = res.template
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
