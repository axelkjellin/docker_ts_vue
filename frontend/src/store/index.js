import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    setUser(user) {
      state.currentUser = {...user}
    }
  },
  actions: {
    setCurrentUser(user) {
      user.commit('user')
    }
  },
  modules: {
  }
})
