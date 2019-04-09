// import firebase from '../../api/firebase'

const state = {
  data: {
    id: '0000',
    category: 'seasonal'
  },
  isFlipped: false,
  isWritable: false,
  clear: false
}

const getters = {
  cardFrontUrl: state => {
    return `/templates/${state.data.category}/${state.data.id}.png`
  },
  isFlipped: state => {
    return state.isFlipped
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
  changeWritable({ dispatch, commit }, boolean) {
    commit('CHANGE_WRITABLE', boolean)
  },
  clearCanvas({ dispatch, commit }) {
    commit('CLEAR_CANVAS')
  }
  /*
  fetchQuestionById({ dispatch, commit }, id) {
    firebase
      .fetchQuestion(id)
      .then(res => {
        console.log(res)
        commit('SUCCESS_FETCH_QUESTION')
        dispatch('setQuestion', res)
      })
      .catch(err => {
        console.log(err)
        commit('FAILED_FETCH_QUESTION')
      })
  },
  deleteQuestion({ dispatch, commit }, id) {
    firebase
      .deleteQuestion(id)
      .then(res => {
        commit('SUCCESS_DELETE_QUESTION')
        dispatch(
          'snackbar/showSnackbar',
          {
            type: 'info',
            message: '質問を削除しました'
          },
          { root: true }
        )
      })
      .catch(err => {
        commit('FAILED_DELETE_QUESTION')
        dispatch(
          'snackbar/showSnackbar',
          {
            type: 'error',
            message: err + '問題が発生しました'
          },
          { root: true }
        )
      })
  }
  */
}

const mutations = {
  FLIP: (state, boolean) => {
    boolean == null
      ? (state.isFlipped = !state.isFlipped)
      : (state.isFlipped = boolean)
  },
  SET_CARD_DATA: (state, res) => {
    state.data = res
  },
  CHANGE_WRITABLE: (state, boolean) => {
    state.isWritable = boolean
  },
  CLEAR_CANVAS: state => {
    state.clear = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
