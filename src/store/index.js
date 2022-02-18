import { createStore } from 'vuex'

export default createStore({
  state: {
    card__front_active: false,
    card__back_active: false,
    returnValueCards: [],
    valueCards: [],
    longTimeout: null,
    shortTimeout: null
  },
  mutations: {
    turnCard(state) {
      state.card__front_active = true
      state.card__back_active = true
    },
    returnCard(state) {
      state.card__front_active = false
      state.card__back_active = false
    },
    addValueCard(state, value) {
      state.valueCards.push(value)
    },
    removeValueCard(state) {
      state.valueCards = []
    },
    addReturnValueCard(state, value) {
      state.returnValueCards.push(value)
    },
    removeReturnValueCard(state) {
      state.returnValueCards = []
    },
    startLongTimeout(state, value) {
      state.longTimeout = setTimeout(value, 5000)
    },
    stopLongTimeout(state) {
      clearTimeout(state.longTimeout)
    },
    startShortTimeout(state, value) {
      state.shortTimeout = setTimeout(value, 2000)
    },
    stopShortTimeout(state) {
      clearTimeout(state.shortTimeout)
    }

  },
  actions: {
  },
  modules: {
  }
})
