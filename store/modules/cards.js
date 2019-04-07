// import firebase from '../../api/firebase'
import seedCardsData from '../../seed/cards'
const state = {
  isFetching: false,
  records: null,
  category: 'seasonal'
}

const getters = {}

const actions = {
  fetchCards({ dispatch, commit }) {
    commit('START_FETCH_CARDS')
    commit('SUCCESS_FETCH_CARDS', seedCardsData)
    /*
    firebase
      .fetchCards()
      .then(res => {
        commit('SUCCESS_FETCH_CARDS', res)
      })
      .catch(err => {
        console.log(err)
        commit('FAILED_FETCH_CARDS')
      })
      */
  }
}

const mutations = {
  START_FETCH_CARDS: state => {
    state.isFetching = true
  },
  SUCCESS_FETCH_CARDS: (state, res) => {
    state.records = {
      ...state.records,
      ...res
    }
    state.isFetching = false
  },
  FAILED_FETCH_CARDS: (state, err) => {
    state.isFetching = false
  },
  CLEAR_CARDS: state => {
    state.records = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
