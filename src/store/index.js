import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      darkmode: JSON.parse(localStorage.getItem('dark')) || false
    }
  },
  getters: {
    getDarkMode(state) {
      return state.darkmode
    }
  },
  mutations: {
    setMode(state, payload) {
      state.darkmode = payload
      localStorage.setItem('dark', JSON.stringify(payload))
    }
  },
  actions: {
    setDarkMode(context, payload) {
      context.commit('setMode', payload)
    }
  }
})

export default store
