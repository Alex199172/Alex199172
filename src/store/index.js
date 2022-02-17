import { createStore } from 'vuex'

export default createStore({
  state: {
    valueCards: []
  },
  mutations: {
    addValueCard(state, value) {
      state.valueCards.push(value)
    },
    removeValueCard(state) {
      state.valueCards = []
    }
  },
  actions: {
  },
  modules: {
  }
})
