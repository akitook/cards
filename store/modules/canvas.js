import { fabric } from 'fabric/dist/fabric-custom'

const state = {
  counter: 0,
  data: '',
  history: [],
  mods: 0,
  isWritable: null,
  isDrawingMode: null
}

const getters = {}

const actions = {
  load({ commit }, canvas) {
    commit('LOAD_CANVAS', canvas)
  },
  change({ commit }) {
    commit('SET_HISTORY')
  },
  zoom({ commit }, opt) {
    commit('ZOOM', opt)
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
  },
  newText({ commit }) {
    commit('NEW_TEXT')
  },
  toggleDrawing({ commit }) {
    commit('TOGGLE_DRAWING')
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
    state.data = new fabric.Canvas('canvas', { maxFingers: 1 })
    state.data.isDrawingMode = true
    state.isDrawingMode = true
    state.isWritable = true
    state.data.freeDrawingBrush.width = 4
    state.data.freeDrawingBrush.color = '#333'
  },
  LOAD_CANVAS: (state, canvas) => {
    state.data.clear()
    state.data.loadFromJSON(canvas)
  },
  SET_HISTORY: state => {
    state.history.push(JSON.stringify(state.data))
  },
  ZOOM: (state, opt) => {
    const delta = opt.e.deltaY
    const pointer = state.data.getPointer(opt.e)
    console.log(pointer)
    let zoom = state.data.getZoom()
    zoom = zoom + delta / 200
    if (zoom > 20) zoom = 20
    if (zoom < 1) zoom = 1
    state.data.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom)
    opt.e.preventDefault()
    opt.e.stopPropagation()
  },
  UNDO_CANVAS: state => {
    if (state.history.length > 0) {
      state.data.clear()
      const pop = state.history[state.history.length - 2]
      state.history.pop()
      state.data.loadFromJSON(pop)
      state.data.renderAll()
    }
  },
  CHANGE_WRITABLE: (state, boolean) => {
    state.data.isDrawingMode = boolean
    state.isDrawingMode = boolean
    state.isWritable = boolean
  },
  TOGGLE_DRAWING: state => {
    state.data.isDrawingMode = !state.data.isDrawingMode
    state.isDrawingMode = !state.isDrawingMode
  },
  NEW_TEXT: state => {
    const textbox = new fabric.Textbox('Thank you!', {
      left: 50,
      top: 50,
      width: 150,
      fontSize: 20
    })
    state.data.add(textbox).setActiveObject(textbox)
    state.data.isDrawingMode = false
    state.isDrawingMode = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
