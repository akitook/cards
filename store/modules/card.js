import firebase from '../../api/firebase'

const state = {
  id: '0001',
  template: {
    id: '0001',
    category: 'seasonal',
    title: 'seasonal01',
    bg: 0
  },
  isFlipped: false,
  isReady: false,
  isSend: false,
  zoom: {
    scale: 1,
    x: null,
    y: null
  },
  isShowZoomWindow: false
}

const getters = {
  cardUrl: state => {
    return `https://cards.hauer.jp/card?id=${state.id}`
  },
  cardFrontUrl: state => {
    return `/templates/${state.template.category}/${
      state.template.title
    }@2x.jpg`
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
      const cardWidth = window.innerWidth < 400 ? window.innerWidth * 0.8 : 400
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
  zoom({ commit }, { scale, x, y }) {
    commit('ZOOM', { scale, x, y })
  },
  zoomOut({ commit, getters }) {
    commit('ZOOM_OUT', { getters })
  },
  showZoomWindow({ commit }, boolean) {
    commit('SHOW_ZOOM_WINDOW', boolean)
  },
  randomBg({ commit }) {
    commit('RANDOM_BG')
  },
  switchBg({ commit }) {
    commit('SWITCH_BG')
  },
  setCategory({ dispatch, commit }, categoryData) {
    commit('SET_CATEGORY', categoryData)
  },
  setCardData({ dispatch, commit }, cardData) {
    commit('SET_CARD_DATA', cardData)
    dispatch('flip', false)
  },
  changeReady({ commit }, boolean) {
    commit('CHANGE_READY', boolean)
  },
  send({ dispatch, commit, getters }, canvasData) {
    commit('START_SEND_CARD')
    firebase
      .postCard(state.template, canvasData, getters.getCardSize)
      .then(res => {
        dispatch('canvas/clear', '', { root: true })
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
  fetchCardById({ dispatch, commit, getters }, id) {
    commit('START_FETCH_CARD')
    firebase
      .fetchCardById(id)
      .then(res => {
        commit('SUCCESS_FETCH_CARD', res)
        const loadData = {
          data: res,
          canvasSize: getters.getCardSize
        }
        dispatch('canvas/load', loadData, { root: true })
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
  ZOOM: (state, { scale, x, y }) => {
    state.zoom.scale = scale
    state.zoom.x = x
    state.zoom.y = y
  },
  ZOOM_OUT: (state, { getters }) => {
    state.zoom.scale = 1
    state.zoom.x = getters.getCardSize.width / 2
    state.zoom.y = getters.getCardSize.height / 2
  },
  SHOW_ZOOM_WINDOW: (state, boolean) => {
    boolean === 'toggle'
      ? (state.isShowZoomWindow = !state.isShowZoomWindow)
      : (state.isShowZoomWindow = boolean)
  },
  RANDOM_BG: state => {
    const randomNum = Math.floor(Math.random() * 4)
    state.template = {
      ...state.template,
      bg: randomNum
    }
  },
  SWITCH_BG: state => {
    if (state.template.bg < 5) {
      state.template = {
        ...state.template,
        bg: state.template.bg + 1
      }
    } else {
      state.template = {
        ...state.template,
        bg: 0
      }
    }
  },
  SET_CATEGORY: (state, res) => {
    const id = res.number + '01'
    const title = res.id + '01'
    state.template = {
      ...state.template,
      id: id,
      title: title,
      category: res.id
    }
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
