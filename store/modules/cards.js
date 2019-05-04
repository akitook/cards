import seedCardsData from '../../seed/cards'
const state = {
  isFetching: false,
  records: seedCardsData,
  category: 'seasonal'
}

const getters = {
  categoryCardList: state => {
    return seedCardsData.filter(function(e) {
      return e.category === state.category
    })
  }
}

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
  },
  setCategory({ commit }, data) {
    commit('SET_CATEGORY', data)
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
  },
  SET_CATEGORY: (state, data) => {
    state.category = data.id
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
