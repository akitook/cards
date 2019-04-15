import { fabric } from 'fabric'

const state = {
  counter: 0,
  data: null,
  history: [],
  mods: 0,
  isWritable: null
}

const getters = {}

const actions = {
  load({ commit }, canvas) {
    commit('LOAD_CANVAS', canvas)
  },
  change({ commit }) {
    commit('SET_HISTORY')
  },
  clear({ dispatch, commit }) {
    commit('CLEAR_ALL')
  },
  init({ commit }) {
    commit('INIT_CANVAS')
  },
  undo({ commit }) {
    commit('UNDO_CANVAS')
  },
  changeWritable({ commit }, boolean) {
    commit('CHANGE_WRITABLE', boolean)
  }
}

const mutations = {
  CLEAR_CANVAS: state => {
    state.json = null
  },
  CLEAR_ALL: state => {
    state.data.clear().renderAll()
    state.history = []
    state.mods = 0
  },
  INIT_CANVAS: state => {
    state.data = new fabric.Canvas('canvas')
    state.data.isDrawingMode = true
    state.isWritable = true
    state.data.freeDrawingBrush.width = 6
    state.data.freeDrawingBrush.color = '#333'
  },
  LOAD_CANVAS: (state, canvas) => {
    state.data.clear()
    state.data.loadFromJSON(canvas)
  },
  SET_HISTORY: state => {
    state.history.push(JSON.stringify(state.data))
    console.log('history:' + state.history.length)
  },
  UNDO_CANVAS: state => {
    if (state.history.length > 0) {
      state.data.clear()
      console.log(state.history)
      const pop = state.history[state.history.length - 2]
      state.history.pop()
      console.log('history2:' + state.history.length)
      state.data.loadFromJSON(pop)
      state.data.renderAll()
    }
  },
  CHANGE_WRITABLE: (state, boolean) => {
    state.data.isDrawingMode = boolean
    state.isWritable = boolean
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
